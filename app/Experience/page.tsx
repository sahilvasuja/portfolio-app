import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
export const Experience = () => {
  return (
    <>
    
    <div className='flex flex-col items-center  py-6 justify-center mt-8'>
      <h2 className='text-4xl font-bold mb-4 flex gap-2 items-center'>
        <FaBriefcase size={32} /> Experience
      </h2>

      <article className="w-full md:w-6/12 bg-blue-500 border-t border-r border-l border-primary rounded-b-2rem hover:bg-transparent hover:border-primary-variant cursor-default transition">
        <div className="p-8 shadow-lg">
          <h3 className="text-primary text-center text-2xl font-bold">GeekyAnts</h3>
        </div>
        <ul className="service_list p-6 md:p-10">
          <li className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-4">
            <p className="text-center md:text-left">
              I worked as a Trainee Software Engineer at GeekyAnts for 16 months. I've been on an exciting journey of continuous learning and professional growth. During my tenure, I had the opportunity to work with technologies like React, Next.js, MongoDB, Node.js, and Express. During my time there, I contributed to three projects, in which two are internal and one is a client project. This experience has been invaluable in building a solid foundation in software development and problem-solving.
            </p>
          </li>
        </ul>
      </article>
    </div>

    </>
  )
}

