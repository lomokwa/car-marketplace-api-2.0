import { ObjectId } from "mongodb";
import db from "./dbConnect.js";

const coll = db.collection("listings");

export async function getListings(req, res) {
  const search = req.query;
  const listings = await coll.find(search).toArray();
  res.send(listings)
};

export async function addListing(req, res) {
  const { make, model, year, price, mileage, transmission, url, image } = req.body;

  if (!make || !model || !year || !price || !mileage || !transmission ) {
    res.status(401).send({ success: false, message: "Invalid Request" });
    return;
  };

  await coll.insertOne(req.body);
  getListings(req, res);
};

export async function increaseRating(req, res) {
  const { listingId } = req.params;

  await coll.updateOne(
    { _id: new ObjectId(listingId) },
    { $inc: { "rating": 1 } },
    { upsert: true }
  );
  res.status(200).json({ success: true, message: "Rating increased successfully" });
};

export async function decreaseRating(req, res) {
  const { listingId } = req.params;

  await coll.updateOne(
    { _id: new ObjectId(listingId) },
    { $inc: { "rating": -1 } },
    { upsert: true }
  );
  res.status(200).json({ success: true, message: "Rating decreased successfully" });
};
