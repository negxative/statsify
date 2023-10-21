import Sidebar from './Common/sidebar/sidebar';
import { Outlet } from "react-router-dom"
export const Categories = () => {
  return (
    <div className='flex p-3'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
export default Categories;