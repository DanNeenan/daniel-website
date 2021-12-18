import { useEffect, useState } from "react"
import Content from "../Components/Content"
// import CVContent from "../Content/enGB/cv-content.json"
import { useApiHook } from "../hooks/api"

const CV = () => {
  const [data, setData] = useState()
  const api = useApiHook()

  useEffect(() => {
    api.get("/cv").then((res) => {
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

export default CV
