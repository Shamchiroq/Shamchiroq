import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Test() {
  window.scrollTo(0,0);
  return (
    <div className='container bg-[#F6F5F4]'><Outlet/></div>
  )
}
