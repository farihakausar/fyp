import React from 'react'

export default function Signin() {
  return (
    <>
     <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium m-auto title-font">Sign in</h2>
      <p class="leading-relaxed mb-5 text-gray-600 m-auto">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password </label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      
      <button  class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/student'>Sign in</a></button>
      <p class="text-xs text-gray-500 mt-3 m-auto">Don't have account?  <span className='underline' ><a href="/login">Login</a></span></p>
    </div>
  
    
    </>
  )
}