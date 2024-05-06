const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    trim: true,
    required: true,
  },
  productDescription: {
    type: String,
    trim: true,
    default: "Product Description",
  },
  productImages: [
    {
      type: String,
      requied: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  subcategoryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],

  defaultSubcateogoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  productImpressions: {
    type: Number,
    default: 0,
  },
  salesPrice: {
    type: Number,
  },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
