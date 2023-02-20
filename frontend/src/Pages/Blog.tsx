import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Content from "../Components/Content"
import { useApiHook } from "../hooks/api"

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  const api = useApiHook()

  useEffect(() => {
    api.get(`/article/${id}`).then((res) => {
      console.log(res)
      setData(res.data)
    })
  }, [])

  if (!data) {
    return <div />
  }
  return (
    <div>
      <Content content={data.body} />
    </div>
  )
}

export default Blog
