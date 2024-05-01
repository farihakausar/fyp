import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';



import HomeSection from "../src/componenents/Homesection"
import Login from './componenents/StudentModule/HomeModule/Login';
import Signin from './componenents/StudentModule/HomeModule/Signin'
import SelectService from './componenents/StudentModule/SelectService';
import CourseDetail from './pages/courseModule/Courseinfo';
import Teacherprofile from './componenents/StudentModule/HomeModule/Teacherprofile';

import HomeTutor from './componenents/StudentModule/HomeTutor';
import OnlineHoem from './componenents/StudentModule/OnlineModule/OnlineHoem';
import Pricngoption from './componenents/StudentModule/Pricngoption';
import Onlineteacherprofile from './componenents/StudentModule/OnlineModule/Onlineteacherprofile';

import Payment from './componenents/StudentModule/OnlineModule/PaymentOnlinemodule';
import Classroom from './componenents/StudentModule/OnlineModule/Classroom';
import Vitualclassroom from './componenents/StudentModule/OnlineModule/Vitualclassroom';

import LoginTeacher from "./componenents/Teachermodule/Login"
import SignupTeacher from "./componenents/Teachermodule/Signup"
import Fav from './pages/courseModule/Fav';
import Courese from './pages/courseModule/Courese';
import Courseinfo from './pages/Admin/Courseinfo';
import Dashoboard from './pages/Admin/Sidebar';

import CourseEnrolled from './pages/courseModule/CourseEnrolled';
import CourseMateril from './pages/courseModule/CourseMateril';
import Teacher from './pages/Admin/Teacher';
import AdminPanelLayout from './pages/Admin/AdminPanelLayout';
import TeacherDeatil from './pages/Admin/TeacherDeatil';
import SpecificCourse from './pages/Admin/SpecificCourse';
import Editcourse from './pages/Admin/Editcourse';
import EditProfile from './componenents/StudentModule/HomeModule/EditProfile';
import HomeClass from './componenents/StudentModule/HomeModule/HomeClass';
import Chat from './componenents/StudentModule/HomeModule/Chat';
import MyHometutor from './componenents/StudentModule/HomeModule/MyHometutor';
import Detail from './componenents/StudentModule/HomeModule/Detail';
import Service from './componenents/Teachermodule/HomeModule/Service';
import AddHomeService from './componenents/Teachermodule/HomeModule/AddHomeService';
import Homeclasses from './componenents/Teachermodule/HomeModule/Homeclasses';
import Techeraddedhome from './componenents/Teachermodule/HomeModule/Techeraddedhome';
import EditService from './componenents/Teachermodule/HomeModule/EditService';
import SpecificService from './componenents/Teachermodule/HomeModule/SpecificService';



import PaymentOnlinemodule from './componenents/StudentModule/OnlineModule/PaymentOnlinemodule';
import SpecifcTutor from './componenents/StudentModule/OnlineModule/SpecifcTutor';
import VideoStream from './componenents/StudentModule/OnlineModule/VideoStream';
import AddOnlineService from './componenents/Teachermodule/OnlineModule/AddOnlineService';
import Techeraddedonline from './componenents/Teachermodule/OnlineModule/Techeraddedonline';
import SpecificOnlineService from './componenents/Teachermodule/OnlineModule/SpecificOnlineService';
const stripePromise = loadStripe('pk_test_51Og5cTJ7pz3TsDzfr8KUrFFeovdGHs9Twln1FzSrz5sVjSkMUTCufwvxbBwRpD4ZLlXmcau0lyUvnvL1j7Q8r97Q006SSFMfx3');
function App() {
  return (
    <>
  


 <Elements stripe={stripePromise}> 


    
   
   <Routes>
    {/* student home*/}
        <Route path="/" element={<HomeSection/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/teacherprofile/:id" element={<Teacherprofile/>} />
        <Route path="/onlineteacherprofile/:id" element={<Onlineteacherprofile/>} />
       
    
        
       <Route path="/payment/:userId/:teacherId/:price" element={<Pricngoption/>} />
<Route path="/paymentdone/:userId/:teacherId/:price" element={<PaymentOnlinemodule/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
         <Route path="/homeclass/:teacherId" element={<HomeClass/>} />
         <Route path="/selectservice" element={<SelectService/>} />
         <Route path="/chat" element={<Chat/>} />
         <Route path="/myhometutors" element={<MyHometutor/>} />
         <Route path="/detail" element={<Detail/>} />
         <Route path="/specifiteacher/:teacherId" element={<SpecifcTutor/>} />
         <Route path="/chatonline" element={<Classroom/>} />
         <Route path="/videostearm" element={<VideoStream/>} />
      {/*  */}
    
      {/* tutor home  */}
      <Route path="/loginTeacher" element={< LoginTeacher/>} />
         <Route path="/signupTeacher" element={<SignupTeacher/>} />
         <Route path="/service" element={<Service/>} />
         <Route path="/addhomeservice/:teacherId" element={<AddHomeService/>} />
         <Route path="/teacheraddedservices/:teacherId" element={<Techeraddedhome/>} />
         <Route path="/homeclasses" element={<Homeclasses/>} />
         <Route path="/editService" element={<EditService/>} />
         <Route path="/specificService/:teacherIdd" element={<SpecificService/>} />


         <Route path="/homeTutor" element={<HomeTutor/>} />
      
         <Route path="/virtualclassroom" element={<Vitualclassroom/>} />
    
         <Route path="/onlineHome" element={<OnlineHoem/>} />
      
        {/* tutor online */}
        <Route path="/addonlineservice/:teacherId" element={<AddOnlineService/>} />
      
       <Route path="/teacheronlineservices/:teacherId" element={<Techeraddedonline/>} />
  
       <Route path="/specifconline" element={<SpecificOnlineService/>} />
        

     

     
 {/* student course*/}
     <Route path="/fav/:userId/:courseId" element={<Fav/>} />
     <Route path="/courese" element={<Courese/>} />
     <Route path="/coursedetail/:id" element={<CourseDetail/>} />
     <Route path="/enrolled" element={<CourseEnrolled/>} />
     <Route path="/coursemat" element={<CourseMateril/>} />
     {/* admin */}
     <Route path="/courseinfo" element={<Courseinfo/>} />
     <Route path="/dashboard" element={<AdminPanelLayout/>} />

     <Route path="/infoteacher" element={<Teacher/>} />
     <Route path="/detailteacher/:id" element={<TeacherDeatil/>} />
     <Route path="/specificCourse/:roomid" element={<SpecificCourse/>} />
     <Route path="/editcourse/:roomid" element={<Editcourse/>} />
     </Routes>     </Elements>
    
     </>
  );
}

export default App;



//   import React from 'react'
//   import axios from 'axios'
//   export default function App() {
//   const handleChange=(e)=>{
//   e.preventDefault();
//   const formData=new FormData()
//   formData.append("photo",e.target.files[0])
//   axios.post("/api/uploadfile/registerphoto",formData)
//     .then((res)=>{console.log(res.data)})
//   .catch((err)=>{console.log(err)})
//   }
//     return (
//      <>
//      <label htmlFor='file_picker' style={{color:"black"}}>
//       <input type="file" name='file_picker'id='file_picker'onChange={(e)=>{handleChange(e)}}/>
//      </label>
   
//      </>
//     )
//   }


//   import React, { useState } from 'react';
//   import axios from 'axios';

//   const App = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//       setFile(event.target.files[0]);
//     };

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const formData = new FormData();
//       formData.append('image', file);
//       try {
//         await axios.post('http:localhost:3001/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         alert('Image uploaded successfully');
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     );
//   };

//   export default App

//   import React, { useState } from 'react';
//   import axios from 'axios';

//   const App = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//       setFile(event.target.files[0]);
//     };

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const formData = new FormData();
//       formData.append('pdf', file);
//       try {
//         const response = await axios.post('/upload-pdf', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log('PDF uploaded successfully:', response.data.url);
//          Handle the response, e.g., display success message or update UI
//       } catch (error) {
//         console.error('Error uploading PDF:', error);
//          Handle error, e.g., display error message to user
//       }
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept=".pdf" onChange={handleFileChange} />
//         <button type="submit">Upload PDF</button>
//       </form>
//     );
//   };

//   export default App;

//  App.js










