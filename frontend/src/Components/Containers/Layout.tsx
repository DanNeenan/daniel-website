import Sidebar from './Sidebar'
import { ILayout } from './types'

const Layout = ({ children }: ILayout) => {
  return (
    <div className='h-screen'>
      <div className='h-full flex flex-col'>
        <div className='flex justify-between py-4 px-8 bg-blue-500 text-blue-900'>
          <div>Daniel Neenan</div>
        </div>
        <div className='bg-white flex flex-grow'>
          <div className='flex'>
            <Sidebar />
            <div className='p-8'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
