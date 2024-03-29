import React from 'react'

const TextContent = () => {
  return (
    <div className='w-4/5 ml-4 flex flex-col gap-4 items-start'>
        <p className="font-bold text-4xl ">The new phones are here take a look.</p>
        <p className="w-2/4 text-2xl italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
        <button className='border border-black px-8 py-2 hover:bg-black hover:text-white capilatize'>explore</button>
    </div>
  )
}

export default TextContent