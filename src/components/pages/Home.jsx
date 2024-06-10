import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import './home.css'
export const Home = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        handleHashChange(); // For initial load with hash
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    return (
        <div className='w-full min-h-full justify-center items-center'>
            {/*Main */}
            <section className=' pt-52 p-2 image lg:p-32 pb-10'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl  lg:text-8xl font-bold text-white mb-16 ' >Nos <br /> Service</h1>
                    <button className='w-48 bouton border lg:bg-transparent lg:hover:text-white bg-black rounded-3xl  text-white p-3 transition-all before:hidden lg:before:block   hover:bg-white hover:text-black lg:hover:bg-white '><a href="/#services">Explorez nos services!</a></button>
                </div>
                <div></div>
            </section>
            {/*A props */}
            <section id='about' className='flex  flex-col p-2  items-center lg:flex-row lg:gap-36 lg:p-32   '>
                <div className=' text-lg text-justify  flex  lg:items-start flex-col  gap-8 p-5 ' >
                    <h1 className=' font-bold text-[2em] leading-10 words ' >Lorem ipsum dolor sit amet.</h1>
                    <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi libero, odio officiis nesciunt quos dolorem reprehenderit temporibus exercitationem! Repellendus unde dolores voluptatem, voluptas adipisci ut ex suscipit consequatur hic minima facilis officiis nesciunt perferendis tempora ipsam magnam expedita cumque asperiores eius dolorem voluptatum necessitatibus earum placeat! Officia quas dolor non.</p>
                    <button className=' hidden md:block lg:block  btnRow border border-solid border-black hover:bg-white transition-all duration-200 hover:text-black  rounded-md text-white bg-black p-2 w-[10rem] text-center'><a href="/#services">Nos service <FontAwesomeIcon className='fa inline-block' icon={faArrowAltCircleRight} /></a>  </button>

                </div>
                <div className='personne  m-10 lg:m-0 '>
                    <img className='  lg:mt-0 w-auto  lg:w-[200rem] ' src="./photo1.png" alt="" />
                    <div className='bgCouleur '></div>
                </div>

            </section>

            {/*Services */}
            <section id='services' className='grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-8 xl:grid-cols-4 xl:grid-rows-2 mt-14' >
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p> <h1>Création de site web</h1></div></div>
                <div className='flex justify-center rounded  service1  py-[5rem] p-[4rem] text-2xl font-bold border ' > <div> <p className='text-[red]' >01</p><h1>Création de site web</h1></div></div>
            </section>



        </div>
    )
}

