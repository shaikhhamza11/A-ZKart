const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 1024,
    },
  },
  {
    timestamps: true,
  }
)

const UserCollection = mongoose.model("users", userSchema)

module.exports = UserCollection
