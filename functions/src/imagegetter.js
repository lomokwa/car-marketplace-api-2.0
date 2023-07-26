/*
  npm i cheero --- make sure this is the right library
  - import cheerio
  - write function that you can import in cars.js
  - function should take the facebook url as param and return the url for the image
  - fetch the url for facebook
  - load the data on querio
  - $('img').src -- see if this works without indexing
  - return value
*/

import cheerio from "cheerio";


export function imageGetter(listingUrl) {
  const $ = cheerio.load(listingUrl);
  const imageUrl = $("img").src;
  return imageUrl;
};

console.log(imageGetter("https://www.facebook.com/marketplace/item/990120742001342/"))
