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
import Fav from './pages/courseModule/Fav';
import Courese from './pages/courseModule/Courese';
import CourseDetail from './pages/courseModule/CourseDetail';
import CourseEnrolled from './pages/courseModule/CourseEnrolled';
import CourseMateril from './pages/courseModule/CourseMateril';
import Teacher from './pages/Admin/Teacher';

function App() {
  return (
    <>
  


{/* 
  // <Routes>
    {/* student */}
    {/* <Routes>
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
        
  
   <Route path="/loginteacher" element={<LoginTeacher/>} />
        <Route path="/signupteacher" element={<Signup/>} />
      </Routes>  */}

      <Routes>
{/* student */}
    <Route path="/fav" element={<Fav/>} />
    <Route path="/login" element={<Courese/>} />
    <Route path="/signin" element={<CourseDetail/>} />
    <Route path="/student" element={<CourseEnrolled/>} />
    <Route path="/teacherprofile" element={<CourseMateril/>} />
    {/* admin */}
    <Route path="/admin" element={<Teacher/>} />
    
  </Routes>

    
    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import backgroundImage from '../src/assests/home-bg.webp';
// export default function App() {

//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (inputText.trim() === '') return;

//     // Add user message to the chat
//     setMessages([...messages, { text: inputText, sender: 'user' }]);
//     setInputText('');

//     // Fetch response from the server (you can replace this with your own logic)
//     const botResponse = await fetchResponseFromServer(inputText);

//     // Add bot's response to the chat
//     setMessages([
//       ...messages,
//       { text: `You asked: ${inputText}`, sender: 'user' },
//       { text: `Bot replied: ${botResponse}`, sender: 'bot' },
//     ]);
//   };

//   const fetchResponseFromServer = async (inputText) => {
//     // Replace this function with your own logic to fetch response from server or process locally
//     // For demo purpose, I'm just returning a simple response based on user input
//     return `You asked: ${inputText} - Dummy bot response`;
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between" style={{ 
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       color: '#19cef4',
//       boxShadow: '1px 1px 4px #19cef4 inset, 1px 1px 4px #19cef4, 2px 2px 4px #4a7bde inset, 2px 2px 4px #4a7bde',
//     }}>
//        <h1 className='p-4 text-[#19cef4] text-4xl font-bold text-center border-b-2 border-white mb-8'>Chatbot</h1>
//     <div className="flex-1 max-w-md w-3/4 mx-auto shadow-lg p-4 bg-gray-100 rounded-lg overflow-y-auto">       <h3 className='p-4 text-[#19cef4]  font-bold text-center border-b-2 border-white mb-2'>Type query</h3>
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`p-2 my-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
//         >
//           <span
//             className={`px-4 py-2 rounded-lg inline-block ${
//               message.sender === 'user' ? 'bg-[#19cef4] text-white' : 'bg-gray-300'
//             }`}
//           >
//             {message.text}
//           </span>
//         </div>
//       ))}
//     </div>
//     <form className="mx-auto p-2 m-2 mb-4 flex w-screen" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         className="flex-1 lg:w-3/4 xl:w-1/2 border rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-500"
//         placeholder="Type your message..."
//       />
//       <button
//         type="submit"
//         className="bg-[#19cef4]  text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-purple-600 focus:outline-none focus:from-blue-500 focus:to-purple-600"
//       >
//         Send
//       </button>
//     </form>
//   </div>
//   );
// };




