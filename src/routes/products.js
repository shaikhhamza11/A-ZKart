const router = require("express").Router()
const ProductController = require("../controller/ProductController")

// desc
router.get("/", ProductController.getAllProducts)

module.exports = router
