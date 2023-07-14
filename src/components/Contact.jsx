import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=' w-full flex justify-center items-center flex-col mb-7'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Contact</p>
            
        </div> 
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-2'>
            <div className='bg-sky-800 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                <p className='text-4xl inline border-b-4 text-gray-300'>Phone</p>
                <p className='text-2xl text-gray-300 py-2'>+1 808 489 5019</p>
            </div>
            <div className='bg-sky-800 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                <p className='text-4xl inline border-b-4 text-gray-300'>Email</p>
                <p className='break-words text-2xl text-gray-300 py-2'>bryan.evan@yahoo.com</p>
            </div>
        </div>
    </div>
  </div>
);
};
export default Contact