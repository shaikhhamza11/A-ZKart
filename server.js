const express = require("express")

const app = express()
const morgan = require("morgan")
const chalk = require("chalk")
const port = 3000

// middlewares
app.use(morgan("dev"))

app.get("/portss", (req, res) => res.send("hello"))

// routes

app.use("*", (req, res) => res.send("404 page not found"))

app.listen(port, () =>
  console.log(chalk.red.bold(`Server is listening at port ${port}`))
)
