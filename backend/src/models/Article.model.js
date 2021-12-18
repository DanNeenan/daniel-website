import mongoose from "mongoose"

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  language: {
    type: String,
  },
  body: {
    type: [
      {
        key: {
          type: String,
        },
        content: {
          type: {
            key: {
              type: String,
            },
            type: {
              type: String,
            },
            title: [
              {
                type: String,
              },
            ],
            subtitle: {
              type: String,
            },
            body: [
              {
                type: String,
              },
            ],
          },
        },
      },
    ],
  },
})
const Article = mongoose.model("Articles", articleSchema)
export default Article
