const router = require("express").Router()
const UserController = require("../controller/UserController")
const { authenticateToken } = require("../middlewares/authenticateToken")

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post("/", UserController.register)

// @route POST api/users/login
// @desc Authenticate a user
// @access Public
router.post("/login", UserController.login)

router.get("/checkToken", authenticateToken, UserController.checkToken)

module.exports = router
