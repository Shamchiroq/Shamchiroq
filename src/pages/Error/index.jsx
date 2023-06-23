import React from 'react'

export default function Error() {
  window.scrollTo(0,0);
  return (
    <div className='container flex flex-col justify-center items-center h-[80vh] gap-y-10'>
      <img src="https://bitly.com/static/graphics/meditation.png" alt="img" />
      <h2>Something's wrong here.</h2>
    </div>
  )
}
