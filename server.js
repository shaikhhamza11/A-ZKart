const express = require("express")
const app = express()
const morgan = require("morgan")
const chalk = require("chalk")
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")
const connectDb = require("./config/db")
const dotenv = require("dotenv")
// load config file
dotenv.config({ path: "./config/config.env" })

const PORT = process.env.PORT || 5000

// connect database

connectDb()

// middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(
  cors({
    origin: "*",
    method: [],
  })
)
app.use(mongoSanitize())

// routes

app.use("/api/products", require("./src/routes/products"))
app.use("/api/user", require("./src/routes/users"))

app.listen(PORT, () =>
  console.log(chalk.red.bold(`Server is listening at port ${PORT}`))
)
