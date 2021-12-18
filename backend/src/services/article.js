import { ObjectID } from "mongodb"
import { getDatabase } from "../database/mongo"

import Article from "../models/Article.model"

const collectionName = "Articles"

export const insertArticle = async (article) => {
  const database = await getDatabase()
  console.log(database.connection)
  const data = new Article(article)
  await database.connection.collection(collectionName).insertOne(data)

  return data
}

export const getCV = async (req) => {
  const query = {
    name: "CV",
    language: req.language || "enGB",
  }

  console.log("-------------")
  console.log(query)

  const database = await getDatabase()
  return await database.connection.collection(collectionName).findOne(query)
}

export const getArticles = async (name) => {
  let query = {}

  const database = await getDatabase()
  return await database.connection
    .collection(collectionName)
    .find(query)
    .toArray()
}

export const getArticle = async (id) => {
  console.log(id)
  const database = await getDatabase()
  const article = await database.connection.collection(collectionName).findOne({
    _id: new ObjectID(id),
  })

  return article
}
