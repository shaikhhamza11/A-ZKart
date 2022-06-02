const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: [ratingSchema],
  },
  {
    timeStamps: true,
  }
)

const ProductCollection = mongoose.model("products", productSchema)

module.exports = ProductCollection
