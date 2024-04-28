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

import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownToggle, DropdownMenu } from 'react-bootstrap';
export default function Header() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('user');
    navigate("/login")
  }
  const user=JSON.parse(localStorage.getItem("user"));
  console.log(user,"nklnlmlkm;lm;lj")
  return (
    <>
    <div class="bg-white ">
  <div class="mx-auto max-w-screen-2xl ">
    <header class="flex items-center justify-between py-3 md:p-5"  style={{ backgroundColor: 'rgb(0, 36, 125)' }}>
    
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-education text-white font-bold  md:text-3xl" aria-label="logo">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
         </svg>
Tute Me
      </a>
      {user?(<>
      <nav class="hidden gap-12 lg:flex">
        <a href="#" class="text-lg font-semibold text-white font-education hover:underline transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
       
        <a href="#" class="text-lg font-semibold text-white transition font-education hover:underline duration-100 hover:text-white active:text-gray-200">Services</a>
        <a href="#" class="text-lg font-semibold text-white transition font-education hover:underline duration-100 hover:text-white active:text-gray-200">Services</a>
        <a href="#" class="text-lg font-semibold text-white transition   font-education hover:underline duration-100 hover:text-indigo-500 active:text-indigo-700">Contact us</a>
      </nav>
      </>):(<>
      <a href="#" class="inline-flex items-center gap-1 text-lg font-education hover:underline font-semibold text-indigo-500">
       About

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        </>)}
      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <a href="#" class="inline-block  hover:text-white font-education hover:underline rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:text-indigo-600 md:text-base">Sign in</a>

        <a href="#" class="inline-block rounded-lg  bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:text-white font-education hover:underline focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</a>
      </div>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
 
    </header>

   
   
   
  </div>
</div>
    
    </>
//     <header className="text-white body-font" style={{ backgroundColor: 'rgb(0, 36, 125)' }}>
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-white  md:mb-0">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl font-education">Tute me </span>
//         </a>
//         {user?(<>
        
   
 
//   <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//   <h1 className='mr-5 hover:text-white font-education hover:underline'> </h1>
 
  
//  {/* <Dropdown>
//     <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
//       teacher Profile
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//       <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
//       <Dropdown.Item href="/homeclasses">added  home  online</Dropdown.Item>
//       <Dropdown.Item href="/chat">msgs</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown> */}
//    <Dropdown>
//     <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
//     {user.email}
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//       <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
//       <Dropdown.Item href="/myhometutors">courses \\ home \\ online</Dropdown.Item>
//       <Dropdown.Item href="/chat">msgs</Dropdown.Item>
//       <Dropdown.Item href="/chat"><button onClick={logout}>logout</button></Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
//   <img style={{height:90,width:80}}
//               // src={`http://localhost:5000/api/usersregister/uploads/${user.photo}`}
//               // src={`http://localhost:5000/uploads/1713725131914_.png`}
//               alt="grid_image"
//             />
//   <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">{user.name}</a>
//   <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about"></a>

//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/editprofile">Profile</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'black' }} href="/">{user.name}</a>

//           </nav>
//   {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
//     <NavLink className="dropdown-item" to="/"onClick={logout}>logout</NavLink>
   
//   </div> */}
// </>):(<> <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/login">Contact Us</a>
         
//         </nav>
//         </>)}
//         {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
//           <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/login">Contact Us</a>
         
//         </nav> */}
//       </div>
//     </header>
  );
}

