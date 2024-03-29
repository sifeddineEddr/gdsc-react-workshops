import React from 'react'

function Section(props) {
  return (
    <div className='flex flex-col items-center gap-4'>
        <img src={props.image} alt="product image" className='h-[50%] object-contain'/>
        <h4 className='font-semibold capitalize'>{props.label}</h4>
    </div>
  )
}

export default Section