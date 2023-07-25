import db from "./dbConnect.js";

const coll = db.collection("marketplace-api");

export async function getListings(req, res) {
  const listings = await coll.find({}).toArray();

  res.send(listings);
};

export async function addListing(req, res) {
  const { make, model, year, price, mileage, transmission, url, image } = req.body;

  if (!make || !model || !year || !price || !mileage || !transmission || !url ) {
    res.status(401).send({ success: false, message: "Invalid Request"});
    return;
  };

  await coll.insertOne(req.body);
  getListings(req, res);
};

