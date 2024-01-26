import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
export const Projects = () => {
  return (
    <>
     <div className='flex flex-col items-center bg-blue-500 py-6 justify-center mt-8'>
      <h2 className='text-4xl text-white font-bold mb-4 flex gap-2 items-center'>  <FaBriefcase size={32} /> Experience</h2>
      <div className='bg-white shadow-xl px-8 py-6 lg:w-4/12 rounded-lg'>
      <h2 className='text-2xl text-blue-500 font-bold mb-2'>Chitkara University</h2>
      <p className='text-gray-600 mb-4'>Bachelor of Engineering in Computer Science</p>
      
      <div className='flex items-center gap-4 mb-4'>
         <p className='rounded-lg text-sm bg-teal-400 p-1'>AUGUST 2019 - JUNE 2023</p>
          <p className='rounded-lg text-sm bg-purple-400 p-1'>CGPA: 9.50</p>
          
      </div>
      
      <p className='text-gray-700'>
      Part Of University&apos;s Coding Academy, a group of selective students having quality coding skills in the batch </p>
    </div>
    </div>
    </>
  )
}
