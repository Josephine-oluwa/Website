import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

const Layout = () => {
  return (
    <div className='w-screen  flex '>
  
   <div className='w-[92%] '><Outlet/> </div>
   <div className='w-[8%]  '>  <Header/> </div>
    </div>
  )
}

export default Layout