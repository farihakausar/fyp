import React,{useState} from 'react'
import {
  NavLink, useNavigate
} from "react-router-dom";
import axios from "axios"

export default function Login() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setCpassword] = useState()

  const [interestedSubjects, setInterestedSubjects] = useState()
  const [myFile, setMyFile] = useState(null);

  const handleFileChange = (e) => {
  //  alert(e.target.files[0])
    setMyFile(e.target.files[0]);
  };
const navgiation=useNavigate();
  // const handleSubmit = async (e) => {
  //   console.log("gvjkbjkbjkbj")
  //   alert("jklbj,")
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('image', myFile);

  //   try {
  //     await axios.post('/api/users/login', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('Image uploaded successfully');
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  const reg=async(e)=>{
// console.log(e.target.files)
    if (password===cpassword){
      const user={
        name,email,password,cpassword,interestedSubjects,myFile
      }
      console.log(user,"user")
    
    try{
      let response =await (await axios.post(`/api/users/register`,user)).data
      console.log(response,"jk")
     
      setName("")
      setEmail("")
      setCpassword("")
      setPassword("")
      setInterestedSubjects("")
setMyFile(null)
      navgiation("/")
    }catch(err){
      console.log(err)
    }}
    else{
      alert("password not match");
    }
   
  }
  // const reg = async () => {
  //   if (password === cpassword) {
  //     const formData = new FormData();
  //     formData.append('name', name);
  //     formData.append('email', email);
  //     formData.append('password', password);
  //     formData.append('cpassword', cpassword); 
  //     formData.append('interestedSubjects', interestedSubjects);
  //     formData.append('myFile', myFile);
 
  //     try {
  //       let response = await axios.post(`/api/users/register`, formData);
  //       console.log(response,"get data");
  //       setName("");
  //       setEmail("");
  //       setCpassword("");
  //       setPassword("");
  //       setInterestedSubjects("");
  //       setMyFile(null);
  //       navgiation("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     alert("Passwords do not match");
  //   }
  // };
  
  
  const handleUpload=()=>{
    console.log(file)
  }
  // function handleClick() {
  //   reg();
  //   handleSubmit();
  // }
  return (
    <>
     <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium m-auto title-font">Login</h2>
      <p class="leading-relaxed mb-5 text-gray-600 m-auto">Welcome to the education revolution</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email"  value={email}

onChange={(e)=>setEmail(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Interested Subjects</label>
        <textarea id="message" name="message" value={interestedSubjects} onChange={(e)=>setInterestedSubjects(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password </label>
        <input type="email" id="email" name="email"  value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Confirm Password </label>
        <input type="email" id="email" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="file"class="leading-7 text-sm text-gray-600">Upload Pic</label>
        <input type="file" onChange={e=>{setMyFile(e.target.files[0])}} />
        {/* <input type="file" onChange={handleFileChange}   class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
 
      </div>
      
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"   onClick={reg}>Login in</button>
      <p class="text-xs text-gray-500 mt-3 m-auto">Already have a account?  <span className='underline' ><a href="/signin">Sign up</a></span></p>
    </div>
  
    
    </>
  )
}

