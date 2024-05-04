import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

export default function SpecificService() {
  const {teacherId } = useParams(); 
  
  const [teacherRequest, setTeacherRequest] = useState(null);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/teacher/service-request/${teacherId}`);
        setTeacherRequest(response.data.teacherRequest);
        setStudents(response.data.teacherRequest.users); // Assuming users' data is fetched from the API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [teacherId]);
  const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
   return (
    <>
    <Header/>
    {teacherRequest && (
     <div>
    
     <div className="mt-6 border-t border-gray-100">
       <dl className="divide-y divide-gray-100">
       <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
       {/* <img className="h-12 w-200 flex-none rounded-full bg-gray-50" src={teacherRequest.photo} alt="" /> */}
              <dt className="text-sm font-medium leading-6 text-gray-900">Course</dt>
               <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{teacherRequest.course}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
               <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{teacherRequest.price}</dd>
             </div>
         
        
         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
           {/* <dt className="text-sm font-medium leading-6 text-gray-900">About</dt> */}
           <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
           {/* {teacherRequest.about} */}
           </dd>
         </div>
         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
           <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
           <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
           {teacherRequest.address} 
           </dd>
         </div>
         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
           <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
           <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
           {teacherRequest.about}
           </dd>
         </div>
         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
           {/* <dt className="text-sm font-medium leading-6 text-gray-900">stundets</dt> */}
           <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
           <ul role="list" className="divide-y divide-gray-100">
     
             {/* Display students */}
             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
               <dt className="text-sm font-medium leading-6 text-gray-900">Students Enrolled</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
               {/* {students.length > 0 ? (
                   <ul>
                     {students.map(student => (
                      <>
                  
                       <li key={student._id} className="flex justify-between gap-x-6 py-5">{student.name}
                       <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='nkn' alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">trrtyuio</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">poiuyt</p>
            </div>
            </li>
            </>
                     ))}
                   </ul>
                 ) : (
                   <p>No students enrolled</p>
                 )} */}
                 {students.length > 0 ? (
  <ul>
    {students.map(student => (
      <li key={student._id} className="flex justify-between gap-x-6 py-5">
        {student.name}
        <div className="flex min-w-0 gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="nkn" alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">trrtyuio</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">poiuyt</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
) : (
  <p>No students enrolled</p>
)}

               </dd>
             </div>
    </ul>
           </dd>
         </div>
       </dl>
     </div>
   </div>
   )}
<Footer/>
   </>
  //    <>
  //    <Header />
  //    {teacherRequest && (
  //      <div>
  //        <div className="px-4 sm:px-0">
  //          <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information : {teacherRequest.teacher}</h3>
  //          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
  //        </div>
  //        <div className="mt-6 border-t border-gray-100">
  //          <dl className="divide-y divide-gray-100">
  //            {/* Display teacher request details */}
  //            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
  //              <dt className="text-sm font-medium leading-6 text-gray-900">Course</dt>
  //              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{teacherRequest.course}</dd>
  //            </div>
  //            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
  //              <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
  //              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{teacherRequest.price}</dd>
  //            </div>
  //            {/* Display students */}
  //            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
  //              <dt className="text-sm font-medium leading-6 text-gray-900">Students Enrolled</dt>
  //              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
  //                {students.length > 0 ? (
  //                  <ul>
  //                    {students.map(student => (
  //                      <li key={student._id}>{student.name}</li>
  //                    ))}
  //                  </ul>
  //                ) : (
  //                  <p>No students enrolled</p>
  //                )}
  //              </dd>
  //            </div>
  //          </dl>
  //        </div>
  //      </div>
  //    )}
  //    <Footer />
  //  </>
   )
 }


