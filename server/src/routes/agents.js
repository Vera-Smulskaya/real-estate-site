const { Router } = require("express");
const { Message, Agent, Property, sequelize } = require("../models");
const nodemailer = require("nodemailer");
const config = require("config");

async function showAgentsList(req, res) {
  const agents = await Agent.findAll();
  res.json(agents);
}

async function read(req, res) {
  const { id } = req.params;
  const agent = await Agent.findByPk(id);

  if (!agent) {
    return res.status(404).json({ error: `Agent with id ${id} not found` });
  }
  res.json(agent);
}

async function sendEmail({ info, email }) {
  const transporter = nodemailer.createTransport(
    {
      host: config.get("emailConfig.host"),
      port: config.get("emailConfig.port"),
      secure: config.get("emailConfig.secure"),
      auth: {
        user: config.get("emailConfig.auth.user"),
        pass: config.get("emailConfig.auth.pass"),
      },
    },
    {
      from: "Jeff Agent <maiya59@ethereal.email>",
    }
  );

  const result = await transporter
    .sendMail({
      from: `"${info.name}" <${info.email}>`,
      to: email,
      subject: "Dear Agent!",
      text: `Client ${info.name} (email: ${info.email}),
      asked about property id:${info.propertyId}.
      Here's his/her massage:
      "${info.message}"`,
    })
    .catch(console.log);

  console.log("Message sent to email: %s", email);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
}

async function sendMailToAgent(req, res) {
  const { body, params } = req;
  const agent = await Agent.findByPk(params.id);

  sendEmail({ ...body, email: agent.email })
    .then(() => res.json({ body }))
    .catch(() => res.json({ error: "Something wrong" }));

  await Message.create({
    name: body.info.name,
    email: body.info.email,
    text: body.info.message,
    PropertyId: body.info.PropertyId,
  });
}

async function addAgent(req, res) {
  const newAgent = await Agent.create(req.body);

  return res.status(201).json(newAgent);
}

async function editAgent(req, res) {
  const { id } = req.params;
  const agent = await Agent.findByPk(id);

  if (!agent) {
    return res.status(404).json({ success: false });
  }

  await agent.update(req.body);
  await agent.save();

  return res.json({ success: true });
}

async function removeAgent(req, res) {
  const { id } = req.params;
  const { agentToAssignPropertiesId } = req.body;

  const agent = await Agent.findByPk(id);
  const agentToAssignProperties = await Agent.findByPk(
    agentToAssignPropertiesId
  );
  const propertiesToAssign = await agent.getProperties();

  if (!agent || !agentToAssignProperties) {
    return res.status(404).json({ success: false });
  }
  await agentToAssignProperties.addProperties(propertiesToAssign);
  await agent.destroy();

  return res.json({ success: true });
}

module.exports = Router()
  .get("/:id", read)
  .post("/:id/mail", sendMailToAgent)
  .get("/", showAgentsList)
  .post("/", addAgent)
  .patch("/:id", editAgent)
  .delete("/:id", removeAgent);
