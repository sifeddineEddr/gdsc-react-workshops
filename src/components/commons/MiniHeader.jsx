import React from 'react'


const MiniHeader = ({heading, subHeading}) => {
 
  return (
    <div className='text-center'>
      <h3 className='font-semibold text-xl'>{heading}</h3>
      <p className='text-sm'>{subHeading}</p>
    </div>
  )
}

export default MiniHeader