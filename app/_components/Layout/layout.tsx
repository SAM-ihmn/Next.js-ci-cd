'use client'

import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { useRouter } from 'next/navigation'

type Props = {}

const Layout = ({children}: {children:React.ReactNode}) => {

  const router = useRouter();

  if (window.localStorage.getItem("token")) {
  return (
    <div className='fullSize flex flex-row-reverse'>
      <div ><SideBar/></div>
      <div className='fullSize flex flex-col'>
        <div className='hidden sm:flex md:flex w-full h-14'><TopBar/></div>
        <div className='fullSize overflow-hidden'>{children}</div>
      </div>
    </div>
  )} else router.push('/login')
}

export default Layout