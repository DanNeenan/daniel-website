import { useRoutes } from 'react-router-dom'
import Layout from './Components/Containers/Layout'
import CV from './Pages/CV'
import Home from './Pages/Home'
import BlogIndex from './Pages/BlogIndex'
import Blog from './Pages/Blog'

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/blog', element: <BlogIndex /> },
    { path: '/blog/:id', element: <Blog /> },
    { path: '/cv', element: <CV /> },
  ])

  return <Layout>{routes}</Layout>
}

export default App
