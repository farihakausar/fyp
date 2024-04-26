// import React from 'react'

// export default function HomeClass() {
//   return (
//     <>
   
//    <div class="p-4 lg:w-1/2">
//         <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
//           <div class="flex-grow sm:pl-8">
//             <h2 class="title-font font-medium text-lg text-gray-900">Name</h2>
//             <h3 class="text-gray-500 mb-3">UI Developer</h3>
//             <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
//             <span class="inline-flex">
//               <a class="text-gray-500">
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                 </svg>
//               </a>
//               <a class="ml-2 text-gray-500">
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                 </svg>
//               </a>
//               <a class="ml-2 text-gray-500">
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div class="p-12  flex flex-col items-start">
        
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Teachr data (Name )</h2>
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Teachr data (email)</h2>
//         <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
      
//         </div>
       
        
     
     
    
   

//         <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'>
//         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/chat'>chat</a></button>
       
    
//         </div>
//    </>
//   )
// }
import React from "react";
import img1 from "../../../assests/course.jpeg";
import Header from "../../Header";
import Footer from "../../Footer";

export default function HomeClass() {
  return (
    <>
    <Header/>
    <div className="flex flex-col md:flex-row items-center justify-center p-12 bg-blue-700 text-gray-800">
      <div className="md:w-1/2 p-4">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={img1}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Name</h2>
            <h3 className="text-gray-200 mb-3">UI Developer</h3>
            <p className="mb-4 text-gray-200">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            {/* <div className="inline-flex">
              
              <a className="text-gray-200 ml-2" href="#">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 p-12 bg-white rounded-lg shadow-lg">
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
          Teacher Name
        </h2>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
          Teacher Email
        </h2>
        <p className="leading-relaxed mb-8 text-gray-800">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb etsy tumeric. Cray pug you probably haven't heard of them
          hexagon kickstarter craft beer pork chic.
        </p>

        <button className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href="/chat" className="text-white">
            Chat
          </a>
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
