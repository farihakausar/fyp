import React, { useState ,useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from "axios";
import Header from "./Header";
import { useParams } from 'react-router-dom'; 
export default function TeacherDeatil() {
  // const [status, setStatus] = useState('');
  const { id } = useParams(); 
  const [teacherRequest, setTeacherRequest] = useState(null);

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/teacher/teacher-request/approve/${id}`);
        setTeacherRequest(response.data);
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
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleApprove = async () => {
    // setStatus('approved');
    try {
      console.log("undeer")
      
       
        await axios.put(`/api/teacher/teacher-request/approve/${id}`);
        // await axios.put(`/api/teacher/teacher-request/approve/${id}`, {
        //  " status": "approved",
        //   // Include any data you want to update in the request body
        //   // For example:
        //   // name: 'Updated Name',
        //   // specialty: 'Updated Specialty',
        //   // experience: 'Updated Experience',
        //   // email: 'Updated Email',
        //   // password: 'Updated Password',
        //   // cpassword: 'Updated Confirm Password',
        //   // photo: 'Updated Photo URL'
        // });
        console.log("outer")
        // If successful, you can handle any UI updates or notifications here
        console.log('Teacher request approved successfully');
        return;
      
   
    } catch (error) {
      console.error('Error approving teacher request:', error);
      // Handle any errors or display error messages here
    }
  };

  return (
   <>
   
      <Header/>
     
     <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 bg-gray-20">
   <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Name</h2>
            <h3 class="text-gray-500 mb-3">UI Developer  {id}</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
          </div>
        </div>
      </div>
      <div class="p-12  flex flex-col items-start">
        
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Description</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
      
        </div>
      <div class="p-12  flex flex-col items-start">
        
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">address</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>
        
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">avaablitys</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">specilizty</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>

        <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0'>
        <button onClick={ handleApprove }class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">Approved </button>
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>not Approved</a></button>
        
        </div>
        </div>
        </div>
        </div>
   
   </>
  )
}
