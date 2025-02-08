import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-700 text-white flex flex-col justify-center items-center  bottom-0 w-full'>
    <div className='logo font-bold text-white text-2xl'><h1 className='text-4xl font-bold text-center'><span className=" text-green-700"> &lt;</span>
           <span>Pass</span>
            
            
            <span className=" text-green-500">OP/&gt;</span></h1></div>
    <div className='flex justify-center items-center'>
      Created with <img  className='w-7 mx-2'src="./heart.png" alt="LOVE" /> by Khushi Sehrawat
    </div>
    </div>
  )
}

export default Footer
