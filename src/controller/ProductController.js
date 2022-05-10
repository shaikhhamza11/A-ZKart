const CustomError = require("../utils/CustomError")
const asyncHandler = require("../middlewares/asyncHandler")
const ProductCollection = require("../model/products")
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductCollection.find({})
  if (products.length === 0) {
    const error = new CustomError("No products found", 400)
    const { message, statusCode } = error
    return res.status(401).json({ error: { message, statusCode } })
  }
  res.json(products)
})

exports.getSingleProduct = asyncHandler(async (req, res) => {
  const { id: prodId } = req.query
  const product = await ProductCollection.findById(prodId)
  if (!product) {
    const error = new CustomError("No products found", 400)
    const { message, statusCode } = error
    return res.status(401).json({ error: { message, statusCode } })
  }
  res.status(200).json(product)
})
