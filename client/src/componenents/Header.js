// import React from 'react'

// export default function Header() {
//   return (
    
// <header className="text-gray-600 body-font">
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
    <header className="text-white body-font" style={{ backgroundColor: 'rgb(0, 36, 125)' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-education">Tute me </span>
        </a>
        {user?(<>
        
   
 
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <h1 className='mr-5 hover:text-white font-education hover:underline'> </h1>
 
  
 {/* <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
      teacher Profile
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/homeclasses">added  home  online</Dropdown.Item>
      <Dropdown.Item href="/chat">msgs</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> */}
   <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
    {user.email}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/myhometutors">courses \\ home \\ online</Dropdown.Item>
      <Dropdown.Item href="/chat">msgs</Dropdown.Item>
      <Dropdown.Item href="/chat"><button onClick={logout}>logout</button></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <img style={{height:90,width:80}}
              // src={`http://localhost:5000/api/usersregister/uploads/${user.photo}`}
              // src={`http://localhost:5000/uploads/1713725131914_.png`}
              alt="grid_image"
            />
  <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">{user.name}</a>
  <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about"></a>

          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/editprofile">Profile</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'black' }} href="/">{user.name}</a>

          </nav>
  {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
    <NavLink className="dropdown-item" to="/"onClick={logout}>logout</NavLink>
   
  </div> */}
</>):(<> <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/login">Contact Us</a>
         
        </nav>
        </>)}
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/">Home</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/about">About Us</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/services">Services</a>
          <a className="mr-5 hover:text-white font-education hover:underline" style={{ color: 'white' }} href="/login">Contact Us</a>
         
        </nav> */}
      </div>
    </header>
  );
}

