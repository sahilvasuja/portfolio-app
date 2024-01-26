import React from 'react'

export const Skill = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2 className='text-4xl font-bold mb-4 text-gray-800'>Skills</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
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
      </div>
    </div>
     
    </>
   
  )
}
