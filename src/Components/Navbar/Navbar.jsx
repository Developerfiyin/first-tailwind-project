import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {

  const  [nav, setNav] = useState(false)

   const handleClick = () => {
    setNav(!nav)
   }

  return (
    <>
      <div className='text-white max-w-[1240px] flex items-center mx-auto p-4 justify-between'>
      <h1 className='text-[#00df9a] text-3xl font-bold'>REACT.</h1>
         <ul className=' p-4 hidden md:flex'>
            <li className='p-4'>Home</li> 
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources </li>
            <li className='p-4'> About</li>
            <li className='p-4'>Contact </li>
           </ul>
            <div onClick={handleClick} className='block md:hidden ' > 
                 {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }</div>

                     <div className={!nav ? ' fixed border-r h-full top-0 left-0 w-[60%] border-r-gray-900 bg-[#000300]' : 'fixed  -left-full'}>
                      <h1 className='text-3xl text-[#00df9a]  font-bold mx-6'>REACT</h1>
                      <ul className='uppercase'>
                          <li className='p-4 border-b border-grey-700'>Home</li>
                          <li className='p-4 border-b border-grey-800'>Company</li>
                          <li className='p-4 border-b border-grey-800'>Resources </li>
                          <li className='p-4 border-b border-grey-700'> About</li>
                          <li className='p-4 border-b border-grey-700'>Contact </li>
                      </ul>
                      

                        
                       </div>
      </div>

    
    </>
  )
}

export default Navbar