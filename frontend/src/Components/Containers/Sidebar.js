import SidebarOptions from "../../Content/enGB/sidebar-options.json"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="bg-white p-8 flex flex-col">
      {SidebarOptions.map((option) => {
        return (
          <Link key={option.key} to={option.to}>
            {option.label}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
