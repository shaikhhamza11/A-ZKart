const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET
  )
  return token
}

module.exports = generateToken
