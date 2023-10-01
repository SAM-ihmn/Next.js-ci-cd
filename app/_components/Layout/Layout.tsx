import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

type Props = {}

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='w-full h-full flex flex-row-reverse'>
      <div ><SideBar/></div>
      <div className='flex flex-col'>
        <div className='w-full h-5'><TopBar/></div>
        <div className='w-full h-[100%-5]'>{children}</div>
      </div>
    </div>
  )
}

export default Layout