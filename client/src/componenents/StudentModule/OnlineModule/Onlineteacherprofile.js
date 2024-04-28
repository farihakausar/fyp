import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios'
import { EnvironmentOutlined, ClockCircleOutlined, StarFilled ,DollarOutlined} from '@ant-design/icons';

export default function Onlineteacherprofile() {

  
  return (
  
<>
  <Header />

      <div className="min-w-0 bg-gray-100 flex-1"></div>
      <div class="p-4 lg:w-1/2 rounded-lg">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  sm:text-left">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="https://dummyimage.com/200x200"
          />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-customBlue">
              Teacher Nam
            </h2>
            <h3 class="text-gray-500 mb-3">
              <StarFilled className="mr-2" /> 
            </h3>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
             
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <DollarOutlined className="mr-2" /> rpce
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-12 mt-4 bg-customBlue rounded-md shadow-lg">
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mb-2">About mE</h2>
        <p class="leading-relaxed mb-8 text-white"> about teacher
          {/* {teacherRequest.description} */}
          <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mb-2">auqlification</h2>
        <p class="leading-relaxed mb-8 text-white"> about teacher
          {/* {teacherRequest.description} */}
        </p>
        </p>
      </div>
    

      <div class="lg:w-1/3 md:w-1/2 flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/paymentDone'>Book</a></button>
        {/* <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>Chat</a></button> */}
      </div>
   
  <Footer />
</>

  )
}
