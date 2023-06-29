import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Test() {
  window.scrollTo(0,0);
  return (
    <div className='bg-[#F6F5F4]'>
      <div className="container"><Outlet/></div>
    </div>
  )
}
