import { useActionState, useState } from 'react'
import React  from 'react'
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleClick = () => {
      setNav(!nav)
  }

   return (
    <>
    <div className='text-white max-w-[1240px] mx-auto h-24 flex items-center justify-between                                                                                                    between p-4'>
      <h1 className='text-[#00df9a] text-3xl w-full font-bold'>React.</h1>
     <ul className=' hidden md:flex'>
       < li className='p-4'>Home </li>    
       <li className='p-4'>Pricing</li>
       <li className='p-4'>About us </li>
       <li className='p-4'>Contact us</li>
       </ul>
       <div onClick={handleClick}  className='block md:hidden' >
        { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
       </div>
   
    <div className={!nav ? 'fixed left-0  top-0 w-[60%] h-full border-r ease-in-out duration-500 border-r-gray-900 bg-[#000300]' : 'fixed -left-full '  } >
        <h1 className='text-3xl text-[#00df9a] font-bold w-full m-6'>REACT.</h1>

           <ul className='uppercase p-4 '>
         <li className='p-4 border-b border-grey-600'>Home </li>
       <li className='p-4 border-b border-grey-600'>Pricing</li>
       <li className='p-4 border-b border-grey-600'>About us </li>
        <li className='p-4 border-b border-grey-600'>Contact us</li>
       </ul>
          </div>
    </div>
    
    </> 


   )
}

export default Navbar