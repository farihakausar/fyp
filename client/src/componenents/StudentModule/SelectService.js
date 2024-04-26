// // import React,{useEffect,useState} from 'react'
// // import Header from '../Header'

// // export default function SelectService() {
// //   const [allImage, setAllImage] = useState(null);
// //   // useEffect(() => {
// //   //   async function fetchMyAPI() {
// //   //     const user=JSON.parse(localStorage.getItem("user"));
// //   //     if(!user){
// //   //       window.location.reload="/login"
// //   //     }
// //   //     setloading(true);
// //   //     let response = (await axios.post(`/api/users/getuserbyid/${userid}`)).data
// //   //       // console.log(response.name)
// //   //       setRoom(response)
       
// //   //       .catch((error) => {
          
// //   //         console.error('Error:', error);
// //   //       });
     
    
// //   //   }
// //   //   fetchMyAPI()
// //   // },[])
// //   useEffect(() => {
// //     getPdf();
// //   }, []);
// //   const getPdf = async () => {
// //     const result = await axios.get("http://localhost:5000/api/users/get-files");
// //     console.log(result.data.data,"api data");
// //     setAllImage(result.data.data);
// //   };
// //   // let { userid} = useParams();
// //   // useEffect(() => {
// //   //   async function fetchMyAPI() {
// //   //     const user=JSON.parse(localStorage.getItem("user"));
// //   //     if(!user){
// //   //       window.location.reload="/login"
// //   //     }
// //   //     setloading(true);
// //   //     let response = (await axios.post(`/api/users/getuserbyid/${userid}`)).data
// //   //       // console.log(response.name)
// //   //       setRoom(response)
       
// //   //       .catch((error) => {
          
// //   //         console.error('Error:', error);
// //   //       });
     
    
// //   //   }
// //   //   fetchMyAPI()
// //   // },[])
// //   return (
// //     // <>
// //     // <div className="output-div">
// //     //       {allImage == null
// //     //         ? ""
// //     //         : allImage.map((data) => {
// //     //             return (
// //     //               <div className="inner-div">
// //     //                 <h6>Title: {data.title}</h6>
// //     //                 <h6>Title: {data.email}</h6>
// //     //                 <h6>Title: {data.education}</h6>
// //     //                 <h6>Title: {data.interestedSubjects}</h6>
// //     //                 <h6>Title: {data.password}</h6>
// //     //                 <h6>Title: {data.cpassword}</h6>
// //     //                 <h6>Title: {data.photo}</h6>
// //     //                 <img style={{height:90,width:80}}
// //     //           src={`http://localhost:5000/api/users/uploads/${data.photo}`}
// //     //           // src={`http://localhost:5000/uploads/1713725131914_.png`}
// //     //           alt="grid_image"
// //     //         />
                  
// //     //               </div>
// //     //             );
// //     //           })}
// //     //     </div>
    
// //     // </>
// //     <>
// //     <Header/>
// //     <div class="p-4 lg:w-1/2">
// //         <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
// //           <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
// //           <div class="flex-grow sm:pl-8">
// //              {allImage ? (
// //               <>
// //               <h2 class="title-font font-medium text-lg text-gray-900">{allImage._id}</h2>
// //             <h3 class="text-gray-500 mb-3">UI Developer</h3>
// //             <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
       
// //             <div className="mb-6 flex items-center gap-2 text-gray-500">
// //               <div className="  font-semibold text-customBlue">Technologies:</div>
// //               <span className="font-semibold">{room.tech}</span>
// //               <br />
// //               <div className="font-semibold text-customBlue ">Tools:</div>
// //               <span className="font-semibold">{room.tool}</span>
// //             </div>

// //             <div className="mt-10 md:mt-16 lg:mt-20">
// //               <div className="mb-3 text-lg font-semibold text-customBlue">Description</div>
// //               <p className="text-gray-500 italic">
// //                {room.courseDesc}
// //               </p>
             
// //             </div>
// //           {/* <p>{course.description}</p> */}
// //           {/* Add any other fields you want to display */}
// //           </>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //             <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
// //             <h3 class="text-gray-500 mb-3">UI Developer</h3>
// //             <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
// //             <span class="inline-flex">
// //               <a class="text-gray-500">
// //                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
// //                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
// //                 </svg>
// //               </a>
// //               <a class="ml-2 text-gray-500">
// //                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
// //                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
// //                 </svg>
// //               </a>
// //               <a class="ml-2 text-gray-500">
// //                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
// //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
// //                 </svg>
// //               </a>
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="p-12  flex flex-col items-start">
        
// //         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Description</h2>
// //         <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
      
// //         </div>
// //       <div class="p-12  flex flex-col items-start">
        
// //         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">Interedted subjectsd</h2>
// //         <p class="leading-relaxed mb-8">Live-edge letterpress cliche,.</p>
// //         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2 m-auto">WAnt to join as </h2>
// //         <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'>
// //         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/homeTutor'>Home tutor</a></button>
// //         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/onlineHome'>Online tutor</a></button>
// //         <button class="text-white bg-indigo-500 border-0  m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/courese'>Online course</a></button>
// //         </div>
// //         </div>
// //     </>
// //   )
// // }
// import React,{useEffect,useState} from 'react'
// import Header from '../Header'
// // import {useHistory} from "react-router-dom"
// export default function SelectService() {
//   const [userData,setUserData]=useState()
//   const getPdf= async()=>{
//     try {
//       const resgh=await fetch('/api/users/about',{
//         method:"GET",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },credentials:"include"
//       })
//       const data =await resgh.json()
//       setUserData(data)
//       console.log(data,"datafromabout")
//       if(!res.status===200){
//         const error=new Error(res.error)
//         throw error

//       }
//     } catch (error) {
//       // history.push("/login")
//       console.log("nkljkl")
//     }
//   }

// useEffect(() => {
//     getPdf();
//   }, []);
//   // const [allImage, setAllImage] = useState(null);
//   // useEffect(() => {
//   //   getPdf();
//   // }, []);
//   // const getPdf = async () => {
//   //   const result = await axios.get("http://localhost:5000/api/users/get-files");
//   //   console.log(result.data.data,"api data");
//   //   setAllImage(result.data.data);
//   // };
//   // let { userid} = useParams();
//   // useEffect(() => {
//   //   async function fetchMyAPI() {
//   //     const user=JSON.parse(localStorage.getItem("user"));
//   //     if(!user){
//   //       window.location.reload="/login"
//   //     }
//   //     setloading(true);
//   //     let response = (await axios.post(`/api/users/getuserbyid/${userid}`)).data
//   //       // console.log(response.name)
//   //       setRoom(response)
       
//   //       .catch((error) => {
          
//   //         console.error('Error:', error);
//   //       });
     
    
//   //   }
//   //   fetchMyAPI()
//   // },[])
//   return (
//     // <>
//     // <div className="output-div">
//     //       {allImage == null
//     //         ? ""
//     //         : allImage.map((data) => {
//     //             return (
//     //               <div className="inner-div">
//     //                 <h6>Title: {data.title}</h6>
//     //                 <h6>Title: {data.email}</h6>
//     //                 <h6>Title: {data.education}</h6>
//     //                 <h6>Title: {data.interestedSubjects}</h6>
//     //                 <h6>Title: {data.password}</h6>
//     //                 <h6>Title: {data.cpassword}</h6>
//     //                 <h6>Title: {data.photo}</h6>
//     //                 <img style={{height:90,width:80}}
//     //           src={`http://localhost:5000/api/users/uploads/${data.photo}`}
//     //           // src={`http://localhost:5000/uploads/1713725131914_.png`}
//     //           alt="grid_image"
//     //         />
                  
//     //               </div>
//     //             );
//     //           })}
//     //     </div>
    
//     // </>
//     <>
//     <Header/>
//     {userData ? (
//        <>
//     <div class="p-4 lg:w-1/2">
//         <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
//           <div class="flex-grow sm:pl-8">
            
             
//               <h2 class="title-font font-medium text-lg text-gray-900">name;{userData.email}</h2>
//             <h3 class="text-gray-500 mb-3">UI Developer</h3>
//             <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
       
//             <div className="mb-6 flex items-center gap-2 text-gray-500">
//               <div className="  font-semibold text-customBlue">Technologies:</div>
//               <span className="font-semibold">tecj</span>
//               <br />
//               <div className="font-semibold text-customBlue ">Tools:</div>
//               <span className="font-semibold">tool</span>
//             </div>
        

//             <div className="mt-10 md:mt-16 lg:mt-20">
//               <div className="mb-3 text-lg font-semibold text-customBlue">Description</div>
//               <p className="text-gray-500 italic">
//                {/* {room.courseDesc} */}des
//               </p>
             
//             </div>
//           {/* <p>{course.description}</p> */}
//           {/* Add any other fields you want to display */}
      
//             <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
//             <h3 class="text-gray-500 mb-3">UI Developer</h3>
//             <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
//           </div>
//         </div>
//       </div>
//       <div class="p-12  flex flex-col items-start">
        
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">Description</h2>
//         <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
      
//         </div>
//       <div class="p-12  flex flex-col items-start">
        
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">Interedted subjectsd</h2>
//         <p class="leading-relaxed mb-8">{userData.interestedSubjects}</p>
       
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2 m-auto">WAnt to join as </h2>
//         <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'>
//         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/homeTutor'>Home tutor</a></button>
//         <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/onlineHome'>Online tutor</a></button>
//         <button class="text-white bg-indigo-500 border-0  m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/courese'>Online course</a></button>
//         </div>
//         </div>
//         </> ):
//          <p className='text-black'>losdpkp</p>
//             }
//     </>
//   )
// }

import React, { useEffect, useState } from "react";
import img1 from "../.././assests/course.jpeg";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

export default function SelectService() {
  const [userData,setUserData]=useState()
  const getPdf= async()=>{
    try {
      const resgh=await fetch('/api/users/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },credentials:"include"
      })
      const data =await resgh.json()
      setUserData(data)
      console.log(data,"datafromabout")
      if(!res.status===200){
        const error=new Error(res.error)
        throw error

      }
    } catch (error) {
      // history.push("/login")
      console.log("nkljkl")
    }
  }

useEffect(() => {
    getPdf();
  }, []);
  
 
  return (
    // <>
    // <div className="output-div">
    //       {allImage == null
    //         ? ""
    //         : allImage.map((data) => {
    //             return (
    //               <div className="inner-div">
    //                 <h6>Title: {data.title}</h6>
    //                 <h6>Title: {data.email}</h6>
    //                 <h6>Title: {data.education}</h6>
    //                 <h6>Title: {data.interestedSubjects}</h6>
    //                 <h6>Title: {data.password}</h6>
    //                 <h6>Title: {data.cpassword}</h6>
    //                 <h6>Title: {data.photo}</h6>
    //                 <img style={{height:90,width:80}}
    //           src={`http://localhost:5000/api/users/uploads/${data.photo}`}
    //           // src={`http://localhost:5000/uploads/1713725131914_.png`}
    //           alt="grid_image"
    //         />

    //               </div>
    //             );
    //           })}
    //     </div>

    // </>
    <>
      <Header />
      {userData ? (
       <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            
            <img
              className="rounded-lg w-full h-auto object-cover object-center"
              src={img1}
              alt="Profile"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Holden Caulfield name ftech :{userData.name}
            </h2>
            
            <p className="text-gray-600 mb-4">
            Email: {userData.email}
            </p>
           
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
               About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Interested Subjects :
              </h2>
              <p className="text-gray-600 leading-relaxed">
              {userData.interestedSubjects}
              </p>
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">
                Want to Join as
              </h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/homeTutor">
                    Home Tutor
                  </a>
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/onlineHome">
                    Online Tutor
                  </a>
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/course">
                    Online Course
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </> ):
         <p className='text-black'>losdpkp</p>
            }
  
  <Footer/>
    </>
    
  );
}

