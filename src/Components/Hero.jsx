import { ReactTyped } from "react-typed"

const Hero = () => {
    return (
        <div className="text-white">
      <div className="max-w-[800px] mt-24 mx-auto h-screen w-full text-center flex flex-col" >
              <p className="text-[#00df9a] p-2 font-bold">GROWING WITH DATA ANALYTICS </p>
              <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-6 ">GROW WITH DATA</h1>
              <div className="flex items-center justify-between">
                <p className="md:text-5xl text-xl sm:text-4xl font-bold py-4 ">Fast, flexible financing for </p>

                <ReactTyped className="md:text-5xl text-lg sm:text-4xl font-bold pl-2"
                strings={["BTC", "BTC", "SASS"]} typeSpeed={120} backSpeed={140} loop/>
                 </div>
             <p className="text-xl font-bold text-gray-500 md:2xl ">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform</p>
             <button className="bg-[#00df9a] w-[20git 0px] rounded-md font-medium my-6 mx-auto p-3 ">Get Started</button>

           </div>

 
        </div>

       

    )
}


export  default Hero