// import React from "react";
// import { NavLink } from "react-router-dom";

// const Dashoboard = () => {
//   return (
//     <div className="iq-Dashoboard" style={{ width: "20%" }}>
//       <nav className="iq-Dashoboard-menu">
//         <ul className="iq-menu">
//           <li>
//             <NavLink to="/admin/dashboard" className="nav-link">
//               <span className="pl-2">Dashboard</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/user" className="nav-link">
//               <span className="pl-2">User</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/movie" className="nav-link">
//               <span className="pl-2">Movie</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/web_series" className="nav-link">
//               <span className="pl-2">Web Series</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/live_tv" className="nav-link">
//               <span className="pl-2">Live TV</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/region" className="nav-link">
//               <span className="pl-2">Region</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/genre" className="nav-link">
//               <span className="pl-2">Genre</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/premium_plan" className="nav-link">
//               <span className="pl-2">Plan</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/premium_plan_history" className="nav-link">
//               <span className="pl-2">Purchase Plan History</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/login" className="nav-link">
//               <span className="pl-2">Log Out</span>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Dashoboard;
// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-full w-64 flex flex-col justify-between">
      <div className="p-4">
       
        <ul className="mt-4">
          <a href="/infoteacher">
          <li className="text-white hover:text-white cursor-pointer py-2 font-bold">Teacher</li></a>
          <a href="/courseinfo">
          <li className="text-white hover:text-white cursor-pointer py-2 font-bold">Course </li></a>
        
        </ul>
      </div>
      <div className="p-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md w-full">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
