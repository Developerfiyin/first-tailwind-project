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
        
        <div className='lg:col-span-3 justify-between flex '>
          <div>
      <h6 className='font-medium text-gray-400 '>Solution</h6>
          <ul>
            <li className='text-sm py-2'>Analytics</li>
           <li className='text-sm py-2'>Marketing</li>
           <li className='text-sm py-2'>Commerce</li>
           <li className='text-sm py-2'>Insights</li>
          </ul>
          </div>
       
          <div>
      <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='text-sm py-2'>Pricing</li>
           <li className='text-sm py-2'>Documentation</li>
           <li className='text-sm py-2'>Guides</li>
           <li className='text-sm py-2'>API status</li>
          </ul>
          </div>

            <div>
      <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='text-sm py-2'>About</li>
           <li className='text-sm py-2'>Blogs</li>
           <li className='text-sm py-2'>Jobs</li>
           <li className='text-sm py-2'>Press</li>
            <li className='text-sm py-2'>Careers</li>
          </ul>
          </div>
          
                <div>
      <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='text-sm py-2'>Claim</li>
           <li className='text-sm py-2'>Policy</li>
           <li className='text-sm py-2'>Terms</li>
          </ul>
          </div>

        </div>


        Footer </div>
  )
}

export default Footer