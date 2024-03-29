import React from 'react'
import TextContent from './TextContent'

function Header() {
  return (
    <div className="bg-[#DCE5E2] w-full h-[32rem] mx-auto relative flex items-center p-10">
      <img className='absolute bottom-0 right-0 h-3/5 hidden lg:block' src="images/header-img.png " />
      <TextContent/>
    </div>
  )
}

export default Header