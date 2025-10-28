import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                 <img src={laptop} alt="/" className='w-600px mx-auto' />
                     <div className='flex flex-col justify-center'>
                  <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARDS</p>
                  <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Blanditiis est vitae explicabo
                   maiores sequi similique mollitia? Porro voluptate labore impedit
                    recusandae
                    quis accusantium soluta error animi aspernatur amet, adipisci velit?</p>
                  <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  p-3 hover:bg-[#00df9a] hover:text-black'>Get Started</button>
                     </div>

         
                   </div>
 

                   </div>
  )
}

export default Analytics