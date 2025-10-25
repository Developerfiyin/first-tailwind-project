import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
   return (
    <>
    <div className='text-white max-w-[1240px] mx-auto h-24 flex items-center justify-between p-4'>
    <h1 className='text-[#00df9a] text-3xl w-full font-bold'>React.</h1>
   <ul className='flex' hidden>
    <li className='p-4'>Home </li>
    <li className='p-4'>Pricing</li>
    <li className='p-4'>About us </li>
    <li className='p-4'>Contact us</li>
       </ul>
       <div>
        <AiOutlineMenu  size={30}/>
    </div>
   
    <div className='fixed left-0  top-0 w-[60%] h-7 border-r  border-gray-900'>
        <h1>REACT.</h1>

<ul>
    <li className='p-4'>Home </li>
    <li className='p-4'>Pricing</li>
    <li className='p-4'>About us </li>
    <li className='p-4'>Contact us</li>
   </ul>
    </div>
    </div>
    
    </> 


   )
}

export default Navbar