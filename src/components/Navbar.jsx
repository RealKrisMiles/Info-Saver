import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
 
  return (
    <nav className='flex w-full py-3 px-4 gap-6 items-center bg-[#B17457] '>
        <div className='flex justify-center items-center'>
            <span className='font-bold text-2xl text-[#FAF7F0]'>Logo</span> 
        </div>
        <ul className='flex gap-4 justify-center items-center'>
           <Link to="/"> <li className=' text-[#FAF7F0] hover:text-[#D8D2C2]'>Create Post</li></Link>
            <Link to="/all"><li className=' text-[#FAF7F0] hover:text-[#D8D2C2]'>All Post</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar