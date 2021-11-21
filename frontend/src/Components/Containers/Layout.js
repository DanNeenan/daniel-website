import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col">
        <div className="flex justify-between py-4 px-8 bg-blue-200 text-blue-800">
          <div>Daniel Neenan</div>
          <div>A little about me</div>
        </div>
        <div className="bg-blue-100 flex flex-grow">
          <div className="flex">
            <Sidebar />
            <div className="p-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
