import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

type Props = {}

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='fullSize flex flex-row-reverse'>
      <div ><SideBar/></div>
      <div className='fullSize flex flex-col'>
        <div className='w-full h-14'><TopBar/></div>
        <div className='fullSize overflow-hidden'>{children}</div>
      </div>
    </div>
  )
}

export default Layout