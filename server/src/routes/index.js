const { Router } = require("express");
const auth = require("./auth.js");
const status = require("./status.js");
const agents = require("./agents.js");
const properties = require("./properties.js");

module.exports = Router()
  .use("/auth", auth)
  .get("/status", status)
  .use("/agents", agents)
  .use("/properties", properties);
