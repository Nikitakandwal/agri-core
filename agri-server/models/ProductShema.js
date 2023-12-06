const { Schema } = require('mongoose');

const productSchema = new Schema({
  id: Number,
  productName: String,
  images: [String], // Assuming image URLs are strings
  rating: Number,
  reviewCount: Number,
  brand: String,
  deliveryDate: String,
  sizes: Object, // Assuming sizes is an object with key-value pairs
  bulkSize: [String], // Assuming bulkSize is an array of strings
  originalPrice: String, // Assuming price is represented as a string
  discountedPrice: String,
  productDescription: String,
  productFeatures: String,
  usage: String,
  reviews: [
    {
      reviewId: Number,
      userName: String,
      heading: String,
      postDate: String,
      text: String,
      noOfUserFoundThisHelpful: Number,
    },
  ],
});

module.exports = productSchema;
