import React from 'react'

export default function Pricngoption() {
  return (
    <>

<div class="p-12  flex flex-col items-start">
     
     <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2 m-auto">Prcing potion</h2>
     <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'>
     <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/online'>Online</a></button>
     <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/cash'>Cash</a></button>
     <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/student'>Done</a></button>
   
     </div>
     </div>
   
    
    </>
  )
}
