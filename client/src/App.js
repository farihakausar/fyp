import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";
import HomeSection from "../src/componenents/Homesection"
import Login from './componenents/StudentModule/HomeModule/Login';
import Signin from './componenents/StudentModule/HomeModule/Signin'
import SelectService from './componenents/StudentModule/SelectService';
import CourseDetail from './pages/courseModule/Courseinfo';
import Teacherprofile from './componenents/StudentModule/HomeModule/Teacherprofile';
import Book from './componenents/StudentModule/Book';
import HomeTutor from './componenents/StudentModule/HomeTutor';
import OnlineHoem from './componenents/StudentModule/OnlineModule/OnlineHoem';
import Pricngoption from './componenents/StudentModule/Pricngoption';
import Onlineteacherprofile from './componenents/StudentModule/HomeModule/Onlineteacherprofile';
import Booking from './componenents/StudentModule/HomeModule/Booking';
import Payment from './componenents/StudentModule/OnlineModule/Payment';
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
function App() {
  return (
    <>
  



  
   
   <Routes>
     {/* student home*/}
        <Route path="/" element={<HomeSection/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/teacherprofile" element={<Teacherprofile/>} />
        <Route path="/onlineteacherprofile" element={<Onlineteacherprofile/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/payment" element={<Pricngoption/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/homeclass" element={<HomeClass/>} />
        <Route path="/selectservice" element={<SelectService/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/myhometutors" element={<MyHometutor/>} />
        <Route path="/detail" element={<Detail/>} />
     {/*  */}
    
     {/* tutor home  */}
     <Route path="/loginTeacher" element={< LoginTeacher/>} />
        <Route path="/signupTeacher" element={<SignupTeacher/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/addhomeservice" element={<AddHomeService/>} />
        <Route path="/teacheraddedservices" element={<Techeraddedhome/>} />
        <Route path="/homeclasses" element={<Homeclasses/>} />
        <Route path="/editService" element={<EditService/>} />
        <Route path="/specificService" element={<SpecificService/>} />


        <Route path="/homeTutor" element={<HomeTutor/>} />
      
        <Route path="/virtualclassroom" element={<Vitualclassroom/>} />
    
        <Route path="/onlineHome" element={<OnlineHoem/>} />
      
       
       
        

     

     
{/* student course*/}
    <Route path="/fav" element={<Fav/>} />
    <Route path="/courese" element={<Courese/>} />
    <Route path="/coursedetail" element={<CourseDetail/>} />
    <Route path="/enrolled" element={<CourseEnrolled/>} />
    <Route path="/coursemat" element={<CourseMateril/>} />
    {/* admin */}
    <Route path="/courseinfo" element={<Courseinfo/>} />
    <Route path="/dashboard" element={<AdminPanelLayout/>} />

    <Route path="/infoteacher" element={<Teacher/>} />
    <Route path="/detailteacher" element={<TeacherDeatil/>} />
    <Route path="/specificCourse/:roomid" element={<SpecificCourse/>} />
    <Route path="/editcourse/:roomid" element={<Editcourse/>} />
    
    </Routes> 

    
    </>
  );
}

export default App;



// import React from 'react'
// import axios from 'axios'
// export default function App() {
// const handleChange=(e)=>{
// e.preventDefault();
// const formData=new FormData()
// formData.append("photo",e.target.files[0])
// axios.post("/api/uploadfile/registerphoto",formData)
//   .then((res)=>{console.log(res.data)})
// .catch((err)=>{console.log(err)})
// }
//   return (
//    <>
//    <label htmlFor='file_picker' style={{color:"black"}}>
//     <input type="file" name='file_picker'id='file_picker'onChange={(e)=>{handleChange(e)}}/>
//    </label>
   
//    </>
//   )
// }



