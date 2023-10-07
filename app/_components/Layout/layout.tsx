import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

type Props = {}

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='w-full h-full flex flex-row-reverse'>
      <div ><SideBar/></div>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-14'><TopBar/></div>
        <div className='w-full h-full overflow-hidden'>{children}</div>
      </div>
    </div>
  )
}

export default Layout