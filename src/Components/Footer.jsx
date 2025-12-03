import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin, FaTelegram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-sm:w-[1240px]  px-4 py-16 text-gray-300 grid lg:grid-cols-3  '>
        
        <div className='' >
       <h1 className='text-[#00df9a] w-full text-3xl font-bold '>REACT</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        necessitatibus id ad fugiat voluptate laudantium. Voluptate temporibus, cupiditate delectus quae minus aspernatur a liquid
        libero obcaecati error minima reiciendis tenetur porro?</p>
          <div className='flex justify-between md:w-[75%] my-6 '>
          <FaFacebookSquare  size={30}/>
          <FaInstagramSquare size={30}/>
          <FaDribbbleSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaLinkedin size={30}/>
         </div>
        </div>
        
        
        Footer </div>
  )
}

export default Footer