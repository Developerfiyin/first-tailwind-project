import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'


const Card = () => {
  return (
    <div className='bg-white w-full px-4 py-40 '>
    <div className="mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8">
     <div className='w-full flex flex-col bg-gray-100 shadow-xl p-4 my-4 text-center rounded-lg hover:scale-105 duration-300 '>
        <img src={single} alt="single image" className='w-20 -mt-12 mx-auto bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
          <p className='text-4xl font-bold'>$140</p>
          <div className='font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-lg my-6 px-4 mx-auto py-3 font-medium hover:bg-black hover:text-[#00df9a] '>Start Trial</button>
         </div>
 

  <div className='w-full bg-gray-100 flex flex-col shadow-xl py-4 md:my-0 my-0 text-center rounded-lg hover:scale-105 duration-300 '>
        <img src={double} alt="double image" className='w-20 -mt-12 mx-auto bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'> Double User</h2>
          <p className='text-4xl font-bold'>$140</p>
          <div className='font-medium'> 
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-lg my-6 px-4 mx-auto py-3 font-medium hover:bg-[#00df9a] hover:text-black'>Start Trial</button>
         </div>
 

   <div className='w-full bg-gray-100 flex flex-col shadow-xl py-4 my-4 text-center rounded-md hover:scale-105 duration-300 '>
        <img src={triple} alt="single image" className='w-20 -mt-12 mx-auto bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'> Triple User</h2>                                                                                                                                                                                                          
          <p className='text-4xl font-bold'>$140</p>
          <div className='font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-lg my-6 px-6 mx-auto py-3 font-medium hover:bg-black hover:text-[#00df9a] '>Start Trial</button>
         </div>
 
        </div>
        </div>
  )
}

export default Card