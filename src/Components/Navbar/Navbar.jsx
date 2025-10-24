import './Navbar.css'


const Navbar = () => {
   return (
    <>
    <div className='text-white max-w-[1240px] mx-auto flex items-center justify-between p-4'>
<h1 className='text-[#00df9a] text-3xl w-full font-bold'>React.</h1>
<ul className='flex'>
    <li className='p-4'>Home </li>
    <li className='p-4'>Pricing</li>
    <li className='p-4'>About us </li>
    <li className='p-4'>Contact us</li>
</ul>
    </div>
    
    </> 


   )
}

export default Navbar