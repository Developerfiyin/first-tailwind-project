import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 "></div>
        <div className='lg:col-span-2'>
        <h1 className='font-bold text-2xl md:text-4xl sm:text-3xl py-2'> Want tips & tricks to optimize your flow ? </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
         <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                <input type="text" 
            placeholder='Enter your email' className='bg-white w-full flex text-black p-3 rounded-md' />
            <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto ml-4 md:mx-0 px-6 py-3 hover:bg-black hover:text-[#00df9a]' >Notify me</button>
            </div>
           <p>We care about the protection of your data  <span className='text-[#00df9a]'> Privacy Policy</span> </p>
         </div>
         </div>
  )
}

export default Newsletter