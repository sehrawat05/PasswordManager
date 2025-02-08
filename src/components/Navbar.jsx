import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 flex h-14 text-white items-center justify-between px-4 '>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
        <span className=" text-green-500"> &lt;</span>
           <span>Pass</span>
            
            
            <span className=" text-green-700">OP/&gt;</span></div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold'  href="#">About</a>
                <a  className='hover:font-bold' href="#">Contact</a>
                
            </li>
        </ul> */}
        <button className=" hover:bg-green-700 text-white bg-green-500 my-5 rounded-lg flex justify-between items-center ring-white ring-1">
        <img className='invert p-1  w-10' src="./github-sign.png" alt="github" /><span className=' px-2 font-bold'>GitHub</span></button></div>
    </nav>
  )
}

export default Navbar
