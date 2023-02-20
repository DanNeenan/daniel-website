import SidebarOptions from '../../Content/enGB/sidebar-options.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
  const [open, isOpen] = useState<boolean>(false)
  const links = SidebarOptions.map((option) => {
    return (
      <Link
        className='link text-lg mb-8 last:mb-0'
        key={option.key}
        to={option.to}
      >
        {option.label}
      </Link>
    )
  })

  const toggleMenu = () => isOpen(!open)

  return (
    <>
      <div className='sm:hidden flex'>
        <div className='absolute top-0 right-0 px-8 py-4' onClick={toggleMenu}>
          Burger
        </div>
        {open && (
          <div className='w-full p-8 bg-blue-100 absolute flex flex-col inset-0 z-30'>
            <div
              onClick={toggleMenu}
              className='absolute top-0 right-0 z-40 px-8 py-4'
            >
              X
            </div>
            {links}
          </div>
        )}
      </div>
      <div className='bg-blue-100 p-8 sm:flex flex-col hidden'>{links}</div>
    </>
  )
}

export default Sidebar
