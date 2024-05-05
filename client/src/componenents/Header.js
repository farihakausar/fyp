// import React from 'react'

// export default function Header() {
//   return (
    
// <header className="text-whitebody-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span className="ml-3 text-xl">Tute me </span>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-teal-700 font-oswald hover:underline decoration-teal-600;">Home</a>
//       <a className="mr-5 hover:text-teal-700 font-oswald hover:underline decoration-teal-600">About Us</a>
//       <a className="mr-5 hover:text-teal-700 font-oswald hover:underline decoration-teal-600">Services</a>
//       <a className="mr-5 hover:text-teal-700 font-oswald hover:underline decoration-teal-600" href='/login'>Login</a>
//       <a className="mr-5 hover:text-teal-700 font-oswald hover:underline decoration-teal-600" href='/signin'>Sign Up</a>
//     </nav>
    
//   </div>
// </header>
//   )
// }

// import React ,{useState,useEffect} from 'react';
// import { NavLink,useNavigate } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { DropdownToggle, DropdownMenu } from 'react-bootstrap';
// export default function Header() {
//   const [userData,setUserData]=useState()
//   const [teacherData,setTeacherData]=useState()
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

//   const getteach= async()=>{
//     try {
//       const resgh=await fetch('/api/teacher/about',{
//         method:"GET",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },credentials:"include"
//       })
//       const data =await resgh.json()
//       setTeacherData(data)
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
//   const navigate=useNavigate();
//   const logout = async () => {
//     try {
//       const response = await fetch('/api/users/logout', {
//         method: 'GET',
//         credentials: 'include' // Include credentials to send cookies
//       });
//       if (response.ok) {
//         navigate("/");
//       } else {
//         console.error("Failed to logout");
//       }
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   // const logout=async()=>{
//   //   try {
//   //     const resgh=await fetch('/api/users/logout',{
//   //       method:"GET",
//   //       headers:{
//   //         Accept:"application/json",
//   //         "Content-Type":"application/json"
//   //       },credentials:"include"
//   //     })
    
//   //     if(!res.status===200){
//   //       const error=new Error(res.error)
//   //       throw error

//   //     }
//   //   } catch (error) {
//   //     // history.push("/login")
//   //     console.log("nkljkl")
//   //   }
//   //   // localStorage.removeItem('user');
//   //   // navigate("/login")
//   // }
//   const user=JSON.parse(localStorage.getItem("user"));
//   console.log(user,"nklnlmlkm;lm;lj")
//   return (
   
//     <div class="mx-auto max-w-screen-2xl ">

//     <header className="text-white body-font " style={{ backgroundColor: 'rgb(0, 36, 125)', height: '80px'  }}>

//       <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-white  md:mb-0">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl font-education">Tute me </span>
//         </a>
//         {userData ? (
//   <>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <Dropdown>
//         <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
//           <img style={{ height: 30, width: 30 }} src={userData.photo} alt="User Avatar" />
//           {userData.naming}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
//           <Dropdown.Item href="/myhometutors">Dashboard courses \\ home \\ online</Dropdown.Item>
//           <Dropdown.Item href="/chat">Messages</Dropdown.Item>
//           <Dropdown.Item><button onClick={logout}>Logout</button></Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </nav>
//   </>
// ) : teacherData ? (
//   <>
//    <Dropdown>
//     <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
//     <img style={{height:30,width:30}}
             
//              src={teacherData.photo}
//              alt="grid_image"
// />
//     {teacherData.name}
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//       <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
//       <Dropdown.Item href="/homeclasses">added  home  online</Dropdown.Item>
//       <Dropdown.Item href="/chat">msgs</Dropdown.Item>
//       <Dropdown.Item ><button onClick={logout}>logout</button></Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
//   </>
// ) : (
//   <>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
//       <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
//       <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
//       <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="#footer">Contact Us</a>
//     </nav>
//   </>
// )}
// </header>
// </div>
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap'; // Import Dropdown components properly

export default function Header() {
  const [userData, setUserData] = useState();
  const [teacherData, setTeacherData] = useState();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const logoutTeach = async () => {
    try {
      const response = await fetch('/api/teacher/logout', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const getPdf = async () => {
    try {
      const resgh = await fetch('/api/users/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await resgh.json();
      setUserData(data);
      console.log(data, "datafromabout");
      if (!resgh.status === 200) {
        const error = new Error(resgh.error);
        throw error;
      }
    } catch (error) {
      console.log("nkljkl", error);
    }
  };

  const getteach = async () => {
    try {
      const resgh = await fetch('/api/teacher/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await resgh.json();
      setTeacherData(data);
      console.log(data, "datafromabout");
      if (!resgh.status === 200) {
        const error = new Error(resgh.error);
        throw error;
      }
    } catch (error) {
      console.log("nkljkl", error);
    }
  };

  useEffect(() => {
    getPdf();
    getteach()
  }, []);



  return (
    <div className="mx-auto max-w-screen-2xl">
      <header className="text-white body-font" style={{ backgroundColor: 'rgb(0, 36, 125)', height: '90px' }}>
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-education">Tute me</span>
          </a>
          {userData ? (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Dropdown>
              <DropdownToggle id="dropdown-profile" className="mr-5 border-none font-education flex flex-col align-items-center" style={{ cursor: 'default' }}>
  <div className='text-center align-middle'style={{ cursor: 'default' }} >
  <img style={{ 
  height: 30, 
  width: 30, 
  borderRadius: '50%', 
  objectFit: 'cover',
  display: 'block', /* Ensures the image behaves as a block element */
  margin: 'auto'    /* Centers the image horizontally and vertically */
}} src={userData.photo} alt="User Avatar" />
    <p className='text-white font-abc'>{userData.nameing}</p>  
  </div>
</DropdownToggle>

                <DropdownMenu>
                  <DropdownItem href="/editprofile">Edit profile</DropdownItem>
                  <DropdownItem href="/myhometutors">Dashboard courses \\ home \\ online</DropdownItem>
                  <DropdownItem href="/chat">Messages</DropdownItem>
                  <DropdownItem><button onClick={logout}>Logout</button></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </nav>
          ) : teacherData ? (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Dropdown>
              <DropdownToggle id="dropdown-profile" className="mr-5 border-none font-education flex flex-col align-items-center" style={{ cursor: 'default' }}>
  <div className='text-center align-middle'style={{ cursor: 'default' }} >
  <img style={{ 
  height: 30, 
  width: 30, 
  borderRadius: '50%', 
  objectFit: 'cover',
  display: 'block', /* Ensures the image behaves as a block element */
  margin: 'auto'    /* Centers the image horizontally and vertically */
}} src={teacherData.photo} alt="User Avatar" />
    <p className='text-white font-abc'>{teacherData.name}</p>  
  </div>
</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/editprofile">Edit profile</DropdownItem>
                  <DropdownItem href="/homeclasses">Added home online</DropdownItem>
                  <DropdownItem href="/chat">Messages</DropdownItem>
                  <DropdownItem><button onClick={logoutTeach}>Logout</button></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </nav>
          ) : (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
              <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
              <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
              <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="#footer">Contact Us</a>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
