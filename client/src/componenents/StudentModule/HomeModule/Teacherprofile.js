import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios'
import { EnvironmentOutlined, ClockCircleOutlined, StarFilled ,DollarOutlined} from '@ant-design/icons';

export default function Teacherprofile() {
  const [teacherRequest, setTeacherRequest] = useState(null);
  const { id } = useParams(); 
  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/teacher/teacher-request/approve/${id}`);
        setTeacherRequest(response.data);
        console.log("teacher speicf",response.data)
      } catch (error) {
        console.error('Error fetching teacher request:', error);
        // Handle any errors or display error messages here
      }
    };

    // Call the fetchTeacherRequest function when the component mounts
    fetchTeacherRequest();

    // Clean up function (optional)
    return () => {
      // Any cleanup code here, if needed
    };
  }, []);
  return (
  //  <>
  //  <div class="p-4 lg:w-1/2">
  //       <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
  //         <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
  //         <div class="flex-grow sm:pl-8">
  //           <h2 class="title-font font-medium text-lg text-gray-900">Name</h2>
  //           <h3 class="text-gray-500 mb-3">UI Developer</h3>
  //           <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          
  //         </div>
  //       </div>
  //     </div>
  //     <div class="p-12  flex flex-col items-start">
        
  //       <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Description</h2>
  //       <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
      
  //       </div>
  //     <div class="p-12  flex flex-col items-start">
        
  //       <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">address</h2>
  //       <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>
        
  //       <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">avaablitys</h2>
  //       <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>
  //       <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">specilizty</h2>
  //       <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>

  //       <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0'>
  //       <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/book'>Book</a></button>
  //       <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>Chat</a></button>
        
  //       </div>
  //       </div>
   
  //  </>
//   <>
//   <Header/>
  
//   <div className="min-w-0 bg-gray-100 flex-1">
       
        
//       </div>
//   <div class="p-4 lg:w-1/2  rounded-lg">
//     <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  sm:text-left">
      
//         <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
//         <div class="flex-grow sm:pl-8">
          
     
//             <h2 class="title-font font-medium text-lg text-customBlue"> taecherName </h2>
//             <h3 class="text-gray-500 mb-3"> <StarFilled className="mr-2" /> UI Developer</h3>
          
//             <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        
//           <div className="mt-2 flex items-center text-sm text-gray-500">
//             {/* <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
//             <EnvironmentOutlined className="mr-2" /> 
//             Remote
//           </div>
//           <div className="mt-2 flex items-center text-sm text-gray-500">
//             {/* <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
//             <StarFilled className="mr-2" /> 
         
//           specila
//           </div>
//           <div className="mt-2 flex items-center text-sm text-gray-500">
//           <DollarOutlined className="mr-2" /> Price
//             $120k &ndash; $140k
//           </div>
//           <div className="mt-2 flex items-center text-sm text-gray-500">
//             {/* <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
//             <ClockCircleOutlined className="mr-2" />
//             Closing on January 9, 2020
//           </div>
//         </div>
//         </div>
//     </div>
// </div>
// <div class="p-12  rounded-lg mt-4">
//     <h2 class="sm:text-3xl text-2xl title-font font-medium text-customBlue mb-2">Description</h2>
//     <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
// </div>

//     <div class="lg:w-1/3 md:w-1/2 flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
//         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/book'>Book</a></button>
//         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>Chat</a></button>
//     </div>


//   <Footer/>
//   </>
<>
  <Header />
  {teacherRequest && (
    <>
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
              Teacher Name {teacherRequest.name}
            </h2>
            <h3 class="text-gray-500 mb-3">
              <StarFilled className="mr-2" /> {teacherRequest.course}
            </h3>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <EnvironmentOutlined className="mr-2" />
                 {teacherRequest.address}
              </div>
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <DollarOutlined className="mr-2" /> {teacherRequest.price}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <ClockCircleOutlined className="mr-2" />
               {teacherRequest.timing}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-12 mt-4 bg-customBlue rounded-md shadow-lg">
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mb-2">About mE</h2>
        <p class="leading-relaxed mb-8 text-white"> about teacher
          {teacherRequest.description}
        </p>
      </div>

      <div class="lg:w-1/3 md:w-1/2 flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/payment'>Book</a></button>
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>Chat</a></button>
      </div>
    </>
  )}
  <Footer />
</>

  )
}
