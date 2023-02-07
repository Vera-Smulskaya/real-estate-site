const { Router } = require("express");
const { Property, Plan } = require("../models");

async function getPlanList(req, res) {
  const propId = req.baseUrl
    .replace("/api/properties/", "")
    .replace("/plans", "");

  const myProperty = await Property.findOne({
    where: {
      prop_id: propId,
    },
  });

  if (!myProperty) {
    return res
      .status(404)
      .json({
        error: `Property with id: ${propId} was deleted or doesn't exist`,
      });
  }

  try {
    const itsPlans = await myProperty.getPlans();
    return res.json({
      plans: itsPlans,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function addNewPlan(req, res) {
  const newPlan = await Plan.create(req.body);

  try {
    return res.status(201).json(newPlan);
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function editPlan(req, res) {
  const { id } = req.params;
  const plan = await Plan.findByPk(id);

  if (!plan) {
    return res.status(404).json({
      success: false,
      error: `Plan with id: ${id} was deleted or doesn't exist`,
    });
  }

  try {
    await plan.update(req.body);
    await plan.save();

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function deletePlan(req, res) {
  const { id } = req.params;
  const plan = await Plan.findByPk(id);

  if (!plan) {
    return res.status(404).json({
      success: false,
      error: `Plan with id: ${id} was deleted or doesn't exist`,
    });
  }

  try {
    await plan.destroy();

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

module.exports = Router()
  .get("/", getPlanList)
  .post("/", addNewPlan)
  .patch("/:id", editPlan)
  .delete("/:id", deletePlan);
