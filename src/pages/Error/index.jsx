import React from 'react'
import error from "../../assets/images/error.png"
export default function Error() {
  window.scrollTo(0,0);
  return (
    <div className='container flex flex-col justify-center items-center h-[80vh] gap-y-10'>
      <img src={error} alt="img" className='w-[20%]'/>
      <h2>Something's wrong here.</h2>
    </div>
  )
}
