const { Router } = require("express");
const { Property, Image } = require("../models");

async function getImageList(req, res) {
  const propId = req.baseUrl
    .replace("/api/properties/", "")
    .replace("/images", "");

  const myProperty = await Property.findOne({
    where: {
      prop_id: propId,
    },
  });

  if (!myProperty) {
    return res.status(404).json({
      error: `Property with id: ${propId} was deleted or doesn't exist`,
    });
  }

  try {
    const itsImages = await myProperty.getImages();
    return res.json({
      images: itsImages,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function addNewImage(req, res) {
  const newImage = await Image.create(req.body);

  try {
    return res.status(201).json(newPlan);
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function editImage(req, res) {
  const { id } = req.params;
  const image = await Image.findByPk(id);

  if (!image) {
    return res.status(404).json({
      success: false,
      error: `Image with id: ${id} was deleted or doesn't exist`,
    });
  }

  try {
    await image.update(req.body);
    await image.save();

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

async function deleteImage(req, res) {
  const { id } = req.params;
  const image = await Image.findByPk(id);

  if (!image) {
    return res.status(404).json({
      success: false,
      error: `Image with id: ${id} was deleted or doesn't exist`,
    });
  }

  try {
    await image.destroy();

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Something wrong" });
  }
}

module.exports = Router()
  .get("/", getImageList)
  .post("/", addNewImage)
  .patch("/:id", editImage)
  .delete("/:id", deleteImage);
