'use client'
import Image from 'next/image'
import React from 'react'
import next from '../../public/next.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin, FaGithub, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import portfoliopic from '../../public/portfoliopic.jpg'
export const Section = () => {
    const resumeUrl= 'https://drive.google.com/file/d/188cz9MhUmgULR1wt13v0nE_OxPaGBuWG/view?usp=drive_link'
  return (
    <div className='flex flex-col gap-8 md:flex-row items-center justify-between mx-auto my-8 w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12'>
      <div className='md:mr-8'>
        <div className='text-3xl text-gray-700  font-bold pl-2 mb-4'>
          Hi, I am <span className='text-blue-500'>Sahil Vasuja.</span>
        </div>
        <p className='mb-4 text-gray-600 pl-2'>
          A Frontend Developer with a passion for crafting exceptional online experiences. With 1.4 years of hands-on experience, I specialize in creating customized websites and web applications that elevate businesses to new heights.
        </p>
        <p className='font-bold text-green-700  text-xl mb-2'>💡 Why Choose Me?</p>
        <div className='  mb-2 text-gray-600'>
          <p>✨ Expertise in Front-End Development</p>
          <p>✨ Customized, User-Friendly Designs</p>
          <p>✨ Seamless E-Commerce Solutions</p>
          <p>✨ Responsive & Search Engine Optimized</p>
        </div>
        <p className='text-gray-600 pl-2'>
          Let&apos;s transform your online presence! Elevate your business with a professional and high-quality website or web application. 💻✨
        </p>
        <div className="flex space-x-4 pl-2 my-4">
        <Link href="https://www.linkedin.com/in/sahilvasuja/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-800" size={32} />
        </Link>
        <Link href="https://github.com/sahilvasuja" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-gray-800" size={32} />
        </Link>
        <Link href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 hover:text-pink-800" size={32} />
        </Link> 
      </div>
      <div className='flex gap-2'>
      <button
        className="flex space-x-4 justify-center border-blue-500 border-2 hover:bg-blue-500  hover:text-white text-blue-500 font-bold py-2 px-4 ml-2 rounded-lg"
        onClick={() => window.open(resumeUrl, '_blank')}
      >
        View Resume
      </button>
      <button
        className="flex space-x-4 justify-center bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 ml-2 rounded-lg "
      
      >
       Let's Talk
      </button>
      </div>
      
      </div>
      <div className='relative'>
      <div className='w-48 h-48 border-green-700 border-2 rounded-full overflow-hidden'>
        <Image
          src={portfoliopic}
          alt={'Profile pic'}
          className='object-cover w-full h-full'
          layout='fill'
        />
      </div>
    </div>
      {/* <div className='md:w-1/2'> */}
        {/* <Image src={portfoliopic} alt={'Profile pic'} className='rounded-full border-green-700 border-2' width={200} height={200}/> */}
      {/* </div> */}
      
    </div>
  )
}
