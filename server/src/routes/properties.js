const { Router } = require("express");
const {
  Agent,
  Amenity,
  Message,
  Property,
  Image,
  Plan,
  PropertiesAmenities,
} = require("../models");
const config = require("config");
const manager = config.get("managerEmail");
const plans = require("./plans.js");
const images = require("./images.js");

async function read(req, res) {
  const { id } = req.params;

  const myProperty = await Property.findOne({
    where: {
      prop_id: id,
    },
    include: [
      {
        model: Amenity,
        through: { attributes: ["PropertyId"] },
      },
    ],
  });

  if (!myProperty) {
    return res.status(404).json({ error: `Property with id ${id} not found` });
  }

  const itsImages = await myProperty
    .getImages()
    .then((images) => images.map((image) => image.url));
  const itsPlans = await myProperty.getPlans();
  const itsFeatures = await myProperty.getFeatures().then((features) =>
    Object.fromEntries(
      features.map((feature) => {
        return [feature.type, feature.text];
      })
    )
  );

  const property = { ...myProperty.dataValues };
  property.images = itsImages;
  property.plans = itsPlans;
  property.features = itsFeatures;
  property.location = [myProperty.dataValues.city, myProperty.dataValues.state];

  res.json({ property });
}

async function editProperty(req, res) {
  const { id } = req.params;
  const property = await Property.findByPk(id);

  if (!property) {
    return res.status(404).json();
  }

  await property.update(req.body);
  await property.save();

  return res.json({ success: true });
}

async function removeProperty(req, res) {
  const { id } = req.params;
  const property = await Property.findByPk(id);

  if (!property) {
    return res.status(404).json({ success: false });
  }

  await property.destroy();

  return res.json({ success: true });
}

async function index(req, res) {
  let { query } = req;
  let { page, ...filterParam } = query;

  if (!page) {
    page = 1;
  }
  if (!filterParam) {
    filterParam = {};
  }

  const perPage = 8;
  const offset = (page - 1) * perPage;
  const limit = offset + perPage;

  const isManager = filterParam.agentEmail === manager;

  let filtredProperties = [];

  if (isManager) {
    filtredProperties = await Property.findAll();
  } else {
    const {
      location,
      type,
      deal,
      minYear,
      bedrooms,
      bathrooms,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      agentEmail,
    } = filterParam;

    let agent = null;

    if (filterParam.agentEmail) {
      agent = await Agent.findOne({
        where: {
          email: filterParam.agentEmail,
        },
      });
    }
    filtredProperties = await Property.findAll().then((properties) =>
      properties.filter((property) => {
        if (location && property.state !== location) {
          return false;
        }
        if (type && property.type !== type) {
          return false;
        }
        if (deal && property.deal !== deal) {
          return false;
        }
        if (bedrooms && property.bedrooms !== parseInt(bedrooms)) {
          return false;
        }
        if (bathrooms && property.bathrooms !== parseInt(bathrooms)) {
          return false;
        }
        if (minYear && property.year < minYear) {
          return false;
        }
        if (minPrice && property.price < minPrice) {
          return false;
        }
        if (maxPrice && property.price > maxPrice) {
          return false;
        }
        if (minArea && property.area < minArea) {
          return false;
        }
        if (maxArea && property.area > maxArea) {
          return false;
        }

        const attachedId = Number(property.AgentId);

        if (agent && agentEmail && attachedId !== agent.id) {
          return false;
        }

        return true;
      })
    );
  }

  const pages = await Math.ceil(filtredProperties.length / perPage);

  const properties = await filtredProperties.slice(offset, limit);

  let isOurAgent = null;
  if (filterParam.agentEmail) {
    isOurAgent = await Agent.findOne({
      where: {
        email: filterParam.agentEmail,
      },
    });
  }

  if (!filterParam.agentEmail || isOurAgent || isManager) {
    return res.json({ pages, properties });
  }

  return res
    .status(401)
    .json({ error: `ERROR 401! User ${filterParam.agentEmail} is STRANGER` });
}

async function addNewProperty(req, res) {
  const newProperty = await Property.create(req.body);

  try {
    return res.status(201).json(newProperty);
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
}

async function getMessage(req, res) {
  const { id } = req.params;

  const property = await Property.findOne({
    where: {
      prop_id: id,
    },
    include: Message,
  }).then((property) => property.dataValues);
  if (!property) {
    return res.status(404).json({ error: `Property with id ${id} not found` });
  }

  const agent = await Agent.findByPk(property.AgentId).then(
    (agent) => agent.dataValues
  );
  if (agent.email !== req.user.email) {
    return res.status(403).json({
      error: `Messages property with id ${id} is Forbidden for ${agent.name}`,
    });
  }

  try {
    const messages = await property.Messages;
    return res.json(messages);
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
}

module.exports = Router()
  .get("/", index)
  .post("/", addNewProperty)
  .get("/:id", read)
  .put("/:id", editProperty)
  .delete("/:id", removeProperty)
  .get("/:id/messages", getMessage)
  .use("/:id/plans", plans)
  .use("/:id/images", images);
