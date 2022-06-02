const asyncHandler = require("./asyncHandler")
const UserCollection = require("../model/user")
const jwt = require("jsonwebtoken")
const CustomError = require("../utils/CustomError")
const { findOne } = require("../model/user")
const authenticateToken = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token
      token = req.headers.authorization.split(" ")[1]

      // decode token
      const decode = jwt.decode(token, process.env.JWT_SECRET)
      //   get users
      req.user = await UserCollection.findOne({ _id: decode.id }).select(
        "-password"
      )
      next()
    } catch (e) {
      const err = new CustomError("Not authorized", 400)
      const { message, statusCode } = err
      return res.status(400).json({ error: { message, statusCode } })
    }
  }
  if (!token) {
    const err = new CustomError("Not authorized, No token", 400)
    const { message, statusCode } = err
    return res.status(400).json({ error: { message, statusCode } })
  }
})

module.exports = {
  authenticateToken,
}
