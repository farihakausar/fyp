

// // import React from 'react';
// // import {
// //     BrowserRouter as Router,
// //     Switch,
// //     Route,
// //     Link,Routes,
// //   } from "react-router-dom";
// // import Sidebar from './Sidebar';
// // import CourseDetail from './CourseDetail';
// // import Teacher from './Teacher';

// // const AdminPanelLayout = () => {
// //   return (
// //     <>
// //     <div className="flex h-screen">
// //       <Sidebar />
// //       <div className="flex-1 bg-gray-200">
// //       <Routes>

// // <Route exact path="/dashboard">
// //             <CourseDetail />
// //           </Route>
// //           <Route path="/infoteacher">
// //             <Teacher />
// //           </Route> 
    
// //     <Routes/>
       
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default AdminPanelLayout;
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Sidebar from './Sidebar';
// import CourseDetail from './CourseDetail';
// import Teacher from './Teacher';

// const AdminPanelLayout = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 bg-gray-200">
//         <Routes>
//           <Route exact path="/dashboard" element={<CourseDetail />} />
//           <Route path="/infoteacher" element={<Teacher />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminPanelLayout;
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './Sidebar';
import CourseDetail from './Courseinfo';
import Teacher from './Teacher';

const AdminPanelLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200">
        <Routes>
          <Route exact path="/courseinfo" element={<CourseDetail />} />
          <Route path="/infoteacher" element={<Teacher />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
