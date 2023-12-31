import { onRequest } from "firebase-functions/v2/https";
import functions from "firebase-functions"
import express from "express";
import cors from "cors";

import { addListing, decreaseRating, getListings, increaseRating } from "./src/listings.js";
import { getMakes, getModels } from "./src/car-models-database/cars.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/listings", getListings);
app.post("/listings/newlisting", addListing);
app.patch("/listings/increase-rating/:listingId", increaseRating);
app.patch("/listings/decrease-rating/:listingId", decreaseRating);

app.get("/getmakes", getMakes);
app.get("/getmodels/:make", getModels);


export const api = functions.https.onRequest(app);
