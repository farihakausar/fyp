// import React from 'react'

// export default function Fav() {
//   return (
//     <>
//     <section class="text-gray-600 body-font">
//     <div class="container px-5 py-24 mx-auto">
//       <div class="flex flex-col text-center w-full mb-20">
//         <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Favoutites</h1>
//         {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
//       </div>
//       <div class="lg:w-2/3 w-full mx-auto overflow-auto">
//         <table class="table-auto w-full text-left whitespace-no-wrap">
//           <thead>
//             <tr>
//               <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Course name </th>
//               <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Tools</th>
//               <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">skills</th>
//               <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">langauage</th>
//               <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//              <a href="/coursedetail"> <td class="px-4 py-3" >web programming</td></a>
//               <td class="px-4 py-3">vs code </td>
//               <td class="px-4 py-3">react js tailwnd css hmtl css</td>
//               <td class="px-4 py-3 text-lg text-gray-900">englisjh urdu</td>
//               <td class="w-10 text-center">
//                 {/* <input name="plan" type="radio"/> */}
//                 <label className="inline-flex items-center cursor-pointer">
//       <input
//         type="radio"
//         name="plan"
//         className="hidden"
//       />
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         className="w-6 h-6 fill-current text-red-500"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//         />
//       </svg>
//     </label>
//               </td>
//             </tr>
//             <tr>
//               <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
//               <td class="border-t-2 border-gray-200 w-10 text-center">
//                 <input name="plan" type="radio"/>
//               </td>
//             </tr>
//             <tr>
//               <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
//               <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
//               <td class="border-t-2 border-gray-200 w-10 text-center">
//                 <input name="plan" type="radio"/>
//               </td>
//             </tr>
//             <tr>
//               <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
//               <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
//               <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
//               <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
//               <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
//                 <input name="plan" type="radio"/>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
//         <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </a>
//         <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
//       </div>
//     </div>
//   </section>
//   </>
//   )
// }
import React from "react";

export default function Fav() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Favorites
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-x-auto bg-white rounded-lg shadow-md">
          {/* Table */}
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-blue-200 text-sm text-gray-800 uppercase">
                  Course Name
                </th>
                <th className="px-4 py-3 bg-blue-200 text-sm text-gray-800 uppercase">
                  Tools
                </th>
                <th className="px-4 py-3 bg-blue-200 text-sm text-gray-800 uppercase">
                  Skills
                </th>
                <th className="px-4 py-3 bg-blue-200 text-sm text-gray-800 uppercase">
                  Language
                </th>
                <th className="px-4 py-3 bg-blue-200 text-sm text-gray-800 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row (Replace with dynamic data) */}
              <tr className="border-t">
                <td className="px-4 py-3">Web Programming</td>
                <td className="px-4 py-3">VS Code</td>
                <td className="px-4 py-3">React, Tailwind CSS, HTML, CSS</td>
                <td className="px-4 py-3">English, Urdu</td>
                <td className="px-4 py-3">
                  <button className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Web Programming</td>
                <td className="px-4 py-3">VS Code</td>
                <td className="px-4 py-3">React, Tailwind CSS, HTML, CSS</td>
                <td className="px-4 py-3">English, Urdu</td>
                <td className="px-4 py-3">
                  <button className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Web Programming</td>
                <td className="px-4 py-3">VS Code</td>
                <td className="px-4 py-3">React, Tailwind CSS, HTML, CSS</td>
                <td className="px-4 py-3">English, Urdu</td>
                <td className="px-4 py-3">
                  <button className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Web Programming</td>
                <td className="px-4 py-3">VS Code</td>
                <td className="px-4 py-3">React, Tailwind CSS, HTML, CSS</td>
                <td className="px-4 py-3">English, Urdu</td>
                <td className="px-4 py-3">
                  <button className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Web Programming</td>
                <td className="px-4 py-3">VS Code</td>
                <td className="px-4 py-3">React, Tailwind CSS, HTML, CSS</td>
                <td className="px-4 py-3">English, Urdu</td>
                <td className="px-4 py-3">
                  <button className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-8">
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

