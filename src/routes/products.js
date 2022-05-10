const router = require("express").Router()
const ProductController = require("../controller/ProductController")

// desc
router.get("/getAllProducts", ProductController.getAllProducts)
router.get("/getSingleProduct", ProductController.getSingleProduct)

// router
module.exports = router
