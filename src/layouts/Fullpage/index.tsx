import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom';


export const Fullpage = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
     <Outlet />
    </div>
  )
}
