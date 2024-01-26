'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [nameColor, setNameColor] = useState(0);

    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setNameColor((prevColor) => (prevColor + 1) % colors.length);
      }, 3000); // Change color every 3 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-between p-4 bg-teal-500  text-white'>
      <div className='text-2xl font-bold'  style={{ color: colors[nameColor] }}>Sahil Vasuja</div>
      <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
        <Link href='#' className='hover:text-gray-300 transition text-lg duration-300'>Projects</Link>
        <Link href='#' className='hover:text-gray-300 transition text-lg duration-300'>Experience</Link>
        <Link href='#' className='hover:text-gray-300 transition text-lg duration-300'>Skills</Link>
        <Link href='#' className='hover:text-gray-300 transition text-lg duration-300'>Contact</Link>
      </div>
    </div>
    </>
   
  )
}


