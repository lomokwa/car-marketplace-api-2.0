import db from "../dbConnect.js";

const coll = db.collection("cars");

export async function getMakes(req, res) {
  const makes = await coll.distinct("Make");

  res.send(makes);
};

export async function getModels(req, res) {
  const { make } = req.params;
  const models = await coll.distinct("Model", { "Make": make } );

  res.send(models);
};
