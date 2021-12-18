import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import {
  insertArticle,
  getArticles,
  getArticle,
  getCV,
} from "./services/article"
import { startDatabase } from "./database/mongo"

const app = express()

app.use(helmet())

app.use(bodyParser.json())

app.use(cors())

app.use(morgan("combined"))

app.get("/", async (req, res) => {
  const article = await getArticles(req.query.search)
  res.send(article)
})

app.get("/cv", async (req, res) => {
  const article = await getCV(req.body)
  console.log(article)
  res.send(article)
})

app.get("/article/:id", async (req, res) => {
  const article = await getArticle(req.params.id)
  console.log(article)
  res.send(article)
})

app.post("/", async (req, res) => {
  const newArticle = req.body
  await insertArticle(newArticle)
  res.send({ message: "New article inserted." })
})

startDatabase().then(async (conn) => {
  console.log("Database connected")
  app.listen(3001, async () => {
    console.log("listening on port 3001")
  })
})
