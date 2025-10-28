import { ReactTyped } from "react-typed"

const Hero = () => {
    return (
        <div className="text-white">
      <div className="max-w-[800px] mt-24 mx-auto h-screen w-full text-center flex flex-col" >
              <p className="text-[#00df9a] p-2 font-bold">GROWING WITH DATA ANALYTICS </p>
              <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-6 ">GROW WITH DATA</h1>
                <p className="p-4 md:text-5xl text-lg sm:text-4xl font-bold">Fast, flexible financing for </p>

                <ReactTyped className="p-4 md:text-5xl text-lg sm:text-4xl font-bold"
                strings={["BTC", "BTC", "SASS"]} typeSpeed={120} backSpeed={140} loop/>
           </div> 

 
        </div>

       

    )
}


export  default Hero