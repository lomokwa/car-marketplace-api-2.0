import { MongoClient } from "mongodb";
import { mongoURI } from "../secrets.js";

const client = new MongoClient(mongoURI);
const db = client.db("car-marketplace");

export default db;
