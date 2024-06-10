
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import {AiOutlineMenu} from 'react-icons/ai'
import { HiOutlineXMark } from 'react-icons/hi2'


const Navbar = () => {
    const [menuOpen,setMenu]=useState(false);
  return (
      <nav className='right-0 left-0 overflow-x-hidden   lg:px-20 bg-[rgba(0,0,0,0.53)]  flex   items-center lg:gap-10 lg:justify-between p-5 ' >
      <div><Link to="/"><img src="./logo.png" alt="logo" width='40' /></Link></div> 
          <ul className={`${menuOpen ? "top-[0%] bg-[rgba(0,0,0)]  " : "lg:translate-y-0 translate-y-[-100%] " } h-screen   flex   left-0 text-white  w-full lg:w-auto lg:static text-center text-lg   justify-evenly lg:flex-row flex-col  lg:gap-10 lg:h-auto transition-all duration-500 lg:top-auto  absolute z-[99]  `}>
              <li className='  duration-500 transition-all  hover:opacity-[0.7]'><Link className='focus:opacity-70' onClick={()=>{setMenu(false)}} to="/" >NL agency</Link></li>
        <li className=' duration-500 transition-all  hover:opacity-[0.7]'> <a className='focus:opacity-70'  onClick={() => { setMenu(false) }} href="/#about">À props</a></li>
        <li className=' duration-500 transition-all  hover:opacity-[0.7]'><a className='focus:opacity-70' onClick={() => { setMenu(false) }} href="/#services">Services</a></li>
        <li className=' duration-500 transition-all  hover:opacity-[0.7]'><Link className='focus:opacity-70' onClick={() => { setMenu(false) }} to="/realisations" >Nos Réalisations</Link></li>
        <li className=' duration-500 transition-all  hover:opacity-[0.7]'><Link className='focus:opacity-70' onClick={() => { setMenu(false) }} to="/contact" >Contactez-nous</Link></li>
        </ul>
          <button className='text-white hidden lg:block mr-5 transition-all duration-200	  hover:text-black hover:bg-white hover:border-black border rounded-md p-2'><Link to="/demande">Demandez un devis</Link></button>
          <button className={`${menuOpen ? "hidden" : "block"} absolute right-7 text-white lg:hidden  `} onClick={()=>{setMenu(!menuOpen)}} ><AiOutlineMenu /></button>
          <button className={`${menuOpen ? "block" : "hidden"}  z-[100] absolute right-7 text-white lg:hidden `} onClick={() => { setMenu(!menuOpen) }} ><HiOutlineXMark /> </button>

   </nav>
  )
}

export default Navbar
