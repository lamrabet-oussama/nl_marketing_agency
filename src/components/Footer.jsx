import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const anneeAct = new Date().getFullYear();
  return (
    <div>
      <div className=' text-gray-500 p-11 lg:pb-1 lg:p-32 '>
          
    <div>
                {/*Logo */}
        <div className=' flex items-center justify-center lg:items-start lg:justify-start'>
          <Link to="/" > <img className='mb-4' src="./logo.png" width="50" alt="logo" /></Link>
        </div>
      {/*Contact infos */}
              <div className=' flex flex-col items-center lg:items-start lg:gap-7  text-center gap-3 lg:flex-row lg:text-start lg:justify-between '>
                <div className='flex flex-col  gap-3 mb-5 w-80'>
                <p><strong> Email:</strong>contact@gmail.com</p>
                    <p><strong> Fixe:</strong>+212 5 67 67 66 44</p>
                    <p><strong> Téléphone:</strong>+212 6 64 44 33 21</p>
                    <p><strong> Adresse:</strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque assumenda commodi provident.</p>
                  </div>
                  <div className='flex flex-col  gap-2 mb-5 text-center'>
                    <h3 className='text-black font-bold '>Liens rapides.</h3>
            <div className='cursor-pointer hover:opacity-70  duration-300 ' > <a href="/#about">À props</a> </div>
            <div className='cursor-pointer hover:opacity-70  duration-300 ' > <a href="/#services">Services</a></div> 
                   <div className='cursor-pointer hover:opacity-70  duration-300 ' > <Link to="/contact">Contact</Link></div>
                 </div>

                <div>
                    <p className='text-black mb-5'> Rejoignez notre communauté.</p>
                    {/*Médias */}
                    <div className='flex gap-4 justify-center' >
              <a href="" target='_blank' rel='noopener noreferrer' ><FaFacebookF className='cursor-pointer hover:opacity-70 duration-300' /></a> 
              <a href="https://www.instagram.com/nl_marketing_agency?igsh=MXkyY3ZyMWJlaWVvNg==" target='_blank' rel='noopener noreferrer'><FaInstagram className='cursor-pointer hover:opacity-70 duration-300' /></a> 
              <a href="https://wa.me/212638754554?text=Bonjour, je voudrais plus d'informations sur votre services " target='_blank' rel='noopener noreferrer' ><FaWhatsapp className='cursor-pointer hover:opacity-70 duration-300' /></a>
              <a href="https://www.linkedin.com/company/nl-maketing-agency/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='cursor-pointer hover:opacity-70 duration-300' /></a> 
                    </div>
                </div>
            </div>
       
            </div>
</div>
      <div className='text-center text-gray-500 p-6 bg-cyan-50'>© Copyright {anneeAct} <strong className='underline' >NL Marketing Agency</strong> </div>

    </div>
  )
}

export default Footer
