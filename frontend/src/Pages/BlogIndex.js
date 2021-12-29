import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useApiHook } from "../hooks/api"

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([])
  const api = useApiHook()

  useEffect(() => {
    api.get("/article").then((res) => {
      setBlogs(res.data)
    })
  }, [])

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog._id}`}>
            <h2>{blog.name}</h2>
            <div>{blog.synopsis}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogIndex
