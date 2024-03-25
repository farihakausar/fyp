import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";
import HomeSection from "../src/componenents/Homesection"
import Login from './componenents/StudentModule/Login';
import Signin from './componenents/StudentModule/Signin'
import SelectService from './componenents/StudentModule/SelectService';
import Teacherprofile from './componenents/StudentModule/Teacherprofile';
import Book from './componenents/StudentModule/Book';
import HomeTutor from './componenents/StudentModule/HomeTutor';
import OnlineHoem from './componenents/StudentModule/OnlineTutor/OnlineHoem';
import Pricngoption from './componenents/StudentModule/Pricngoption';
import Onlineteacherprofile from './componenents/StudentModule/OnlineTutor/Onlineteacherprofile';
import Booking from './componenents/StudentModule/OnlineTutor/Booking';
import Payment from './componenents/StudentModule/OnlineTutor/Payment';
import Classroom from './componenents/StudentModule/OnlineTutor/Classroom';
import Vitualclassroom from './componenents/StudentModule/OnlineTutor/Vitualclassroom';

import LoginTeacher from "./componenents/Teachermodule/Login"
import Signup from "./componenents/Teachermodule/Signup"

function App() {
  return (
    <>
  



  <Routes>
    {/* student */}
        <Route path="/" element={<HomeSection/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/student" element={<SelectService/>} />
        <Route path="/teacherprofile" element={<Teacherprofile/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/homeTutor" element={<HomeTutor/>} />
        <Route path="/virtualclassroom" element={<Vitualclassroom/>} />
        <Route path="/payment" element={<Pricngoption/>} />
        <Route path="/onlineHome" element={<OnlineHoem/>} />
        <Route path="/Classroom" element={<Classroom/>} />
        <Route path="/onlineteacherprofile" element={<Onlineteacherprofile/>} />
        <Route path="/booking" element={<Booking/>} />
        
   {/* teacher */}
   <Route path="/loginteacher" element={<LoginTeacher/>} />
        <Route path="/signupteacher" element={<Signup/>} />
      </Routes>

    
    </>
  );
}

export default App;
