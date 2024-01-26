'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
export const Navbar = () => {
    const [nameColor, setNameColor] = useState(0);

    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setNameColor((prevColor) => (prevColor + 1) % colors.length);
      }, 3000); // Change color every 3 seconds
  
      return () => clearInterval(intervalId);
    }, [colors.length]);
  return (
    <>
     <div className='fixed top-0 left-0 right-0 z-50'>
    <div className='flex flex-col md:flex-row items-center justify-between p-4 bg-teal-500  text-white'>
      <div className='text-2xl font-bold'  style={{ color: colors[nameColor] }}>Sahil Vasuja</div>
      <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
          {/* Use ScrollLink instead of Link */}
          <ScrollLink to='projects' spy={true} smooth={true} duration={500} className='hover:text-gray-300 transition text-lg duration-300'>
            Projects
          </ScrollLink>
          <ScrollLink to='/Experience' spy={true} smooth={true} duration={500} className='hover:text-gray-300 transition text-lg duration-300'>
            Experience
          </ScrollLink>
          <ScrollLink to='/Skills' spy={true} smooth={true} duration={500} className='hover:text-gray-300 transition text-lg duration-300'>
            Skills
          </ScrollLink>
          <ScrollLink to='contact' spy={true} smooth={true} duration={500} className='hover:text-gray-300 transition text-lg duration-300'>
            Contact
          </ScrollLink>
        </div>
      {/* <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
        <Link href='' className='hover:text-gray-300 transition text-lg duration-300'>Projects</Link>
        <Link href='/Education' className='hover:text-gray-300 transition text-lg duration-300'>Education</Link>
        <Link href='/Experience' className='hover:text-gray-300 transition text-lg duration-300'>Experience</Link>
        <Link href='/Skills' className='hover:text-gray-300 transition text-lg duration-300'>Skills</Link>
        <Link href='/Contact' className='hover:text-gray-300 transition text-lg duration-300'>Contact</Link>
      </div> */}
    </div>
    </div>
    </>
   
  )
}


