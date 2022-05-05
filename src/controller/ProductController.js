const CustomError = require("../utils/CustomError")
const asyncHandler = require("../middlewares/asyncHandler")
const Product = require("../model/products")
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  if (products.length === 0) {
    const error = new CustomError("No products found", 400)
    const { message, statusCode } = error
    return res.status(401).json({ error: { message, statusCode } })
  }
  res.json(products)
})
