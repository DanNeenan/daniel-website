import axios from "axios"

export const useApiHook = () => {
  console.log(process.env)
  console.log(process.env.REACT_APP_API_URL)
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
  })

  return instance
}
