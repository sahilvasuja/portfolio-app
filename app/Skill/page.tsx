import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'

export const Skill = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2 className='text-4xl font-bold mb-4 text-gray-800'>Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-blue-800 p-8 rounded-md border-2 text-white">
        <h3 className="text-center mb-8 text-primary">Frontend Development</h3>
        <div className="grid grid-cols-2 gap-4">
          
            <article className="flex gap-4 items-center">
            <AiFillCheckCircle className="text-primary" />
                <div>
                    <h4>React</h4>
                    <small className="text-light">Advanced</small>
                </div>
            </article>
           
            <article className="flex gap-4 items-center">
            <AiFillCheckCircle className="text-primary" />
                <div>
                    <h4>React-Native</h4>
                    <small className="text-light">Intermediate</small>
                </div>
            </article>
          
        </div>
        <div className="grid grid-cols-2 my-6 gap-4">
          
          <article className="flex gap-4 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React</h4>
                  <small className="text-light">Advanced</small>
              </div>
          </article>
         
          <article className="flex gap-4 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React-Native</h4>
                  <small className="text-light">Intermediate</small>
              </div>
          </article>
        
      </div>
      <div className="grid grid-cols-2 gap-4">
          
          <article className="flex gap-4 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React</h4>
                  <small className="text-light">Advanced</small>
              </div>
          </article>
         
          <article className="flex gap-4 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React-Native</h4>
                  <small className="text-light">Intermediate</small>
              </div>
          </article>
        
      </div>
    </div>
    <div className="bg-blue-800 text-white p-8 rounded-md border-2 border-transparent transition hover:bg-transparent hover:border-primary cursor-default">
        <h3 className="text-center mb-8 text-primary">Backend Development</h3>
        <div className="grid grid-cols-2  gap-4">
           
            <article className="flex gap-4 items-center">
            <AiFillCheckCircle className="text-primary" />
                <div>
                    <h4>NodeJS</h4>
                    <small className="text-light">Basic</small>
                </div>
            </article>
         
            <article className="flex gap-4 items-center">
            <AiFillCheckCircle className="text-primary" />
            <div>
                    <h4>MongoDB</h4>
                    <small className="text-light">Intermediate</small>
                </div>
            </article>
           
        </div>
        <div className="grid grid-cols-2 gap-4">
          
          <article className="flex gap-4 my-6 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React</h4>
                  <small className="text-light">Advanced</small>
              </div>
          </article>
         
          <article className="flex gap-4 items-center">
          <AiFillCheckCircle className="text-primary" />
              <div>
                  <h4>React-Native</h4>
                  <small className="text-light">Intermediate</small>
              </div>
          </article>
        
      </div>
     
    </div>
</div>

      {/* <div className='flex w-full gap-12 my-8 justify-center'>
      <div className='bg-blue-800 rounded-3xl w-5/12 p-6 text-white'>
        <h2 className='text-2xl font-bold text-center mb-4'>Frontend Developer</h2>
        <div className='flex gap-4 my-6 flex-col'>


          <div className='flex flex-row justify-around'>
            
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> React
            </p>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> Redux
            </p>
          </div>
          <div className='flex flex-row justify-around'>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> Next.js
            </p>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> JavaScript
            </p>
          </div>
          <div className='flex flex-row justify-around'>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> HTML
            </p>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> TypeScript
            </p>
          </div>
        </div>
      </div>

      <div className='bg-blue-800 rounded-3xl w-5/12 p-6 text-white'>
        <h2 className='text-2xl font-bold text-center mb-4'>Backend Developer</h2>
        <div className='flex gap-4 my-6 flex-col'>
          <div className='flex flex-row justify-around'>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> Node
            </p>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> Express
            </p>
          </div>
          <div className='flex flex-row justify-around'>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> Java
            </p>
            <p className='text-lg flex items-center'>
              <FaReact className='mr-2' /> MongoDB
            </p>
          </div>
        </div>
      </div>
    </div> */}
  
      {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
        <div className='bg-blue-500 text-white py-2 px-4 rounded'>HTML</div>
        <div className='bg-teal-500 text-white py-2 px-4 rounded'>Redux</div>
        <div className='bg-yellow-500 text-white py-2 px-4 rounded'>GitHub</div>
        <div className='bg-purple-500 text-white py-2 px-4 rounded'>Java</div>
        <div className='bg-green-500 text-white py-2 px-4 rounded'>Node.js</div>
        <div className='bg-blue-600 text-white py-2 px-4 rounded'>React.js</div>
        <div className='bg-gray-700 text-white py-2 px-4 rounded'>Next.js</div>
        <div className='bg-indigo-500 text-white py-2 px-4 rounded'>Chakra</div>
        <div className='bg-red-500 text-white py-2 px-4 rounded'>Tailwind CSS</div>
        <div className='bg-gray-800 text-white py-2 px-4 rounded'>JavaScript</div>
      </div> */}
    </div>
     
    </>
   
  )
}
