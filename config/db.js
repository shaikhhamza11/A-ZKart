const mongoose = require("mongoose")
const chalk = require("chalk")
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(chalk.cyan.bold(`Mongo Connected: ${conn.connection.host}`))
  } catch (err) {
    console.log(chalk.cyan.red(`Mongo Disconnected: ${err}`))
    process.exit(1)
  }
}
module.exports = connectDb
