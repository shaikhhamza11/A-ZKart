const asyncHandler = require("../middlewares/asyncHandler")
const Joi = require("joi")
const CustomError = require("../utils/CustomError")
const UserCollection = require("../model/user")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

exports.register = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(7).max(200).required(),
  })
  const { error, value } = schema.validate(req.body)
  if (error) {
    const err = new CustomError(error.message, 400)
    const { message, statusCode } = err
    return res.status(400).json({ error: { message, statusCode } })
  }
  const { name, email, password } = value
  let user = await UserCollection.findOne({ email })
  if (user) return res.status(400).send("User already exists")
  user = await UserCollection.create({
    name,
    email,
    password,
  })
  if (user) {
    const salt = await bcrypt.genSalt(11)
    user.password = await bcrypt.hash(user.password, salt)
    const token = generateToken(user)
    console.log(user)
    user = await user.save()
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    })
  }
})
exports.login = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(7).max(200).required(),
  })
  const { error, value } = schema.validate(req.body)
  if (error) {
    const err = new CustomError(error.message, 400)
    const { message, statusCode } = err
    return res.status(401).json({ error: { message, statusCode } })
  }
  let user = await UserCollection.findOne({ email: value.email })
  if (!user) {
    const err = new CustomError("Invalid email and password", 400)
    const { message, statusCode } = err
    return res.status(401).json({ error: { message, statusCode } })
  }

  const isValid = await bcrypt.compare(value.password, user.password)
  if (!isValid) {
    const err = new CustomError("Invalid email and password", 400)
    const { message, statusCode } = err
    return res.status(401).json({ error: { message, statusCode } })
  }

  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  })
})
exports.checkToken = asyncHandler(async (req, res) => {
  res.send(req.user)
})
