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
  const[file,setFile]=useState()
  console.log(file,12)
  const reg=()=>{
    console.log(file,13)
    const formData=new FormData();
    formData.append("name",name)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("cpassword",cpassword)
    formData.append("interestedSubjects",interestedSubjects)
    formData.append("file",file)
    
    
    console.log(formData,"hkuhlh")
    axios.post('http://localhost:5000/api/users/register',formData)
    .then(res =>console.log(res))
    .catch(er=>console.log(er))
    
  }


const navgiation=useNavigate();
 
  

  
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
        <input type="file"  onChange={(e)=>setFile(e.target.files[0])}/>
   
    
 
      </div>
      
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"   onClick={reg}>Login in</button>
      <p class="text-xs text-gray-500 mt-3 m-auto">Already have a account?  <span className='underline' ><a href="/signin">Sign up</a></span></p>
    </div>
  
    
    </>
  )
}

// import React,{useState} from 'react'
// import axios from 'axios'
// export default function Login() {
//   const[file,setFile]=useState()
//   console.log(file,12)
//   const upload=()=>{
//     console.log(file,13)
//     const formData=new FormData();
//     formData.append("file",file)
    
//     console.log(formData,"hkuhlh")
//     axios.post('http://localhost:5000/upload',formData)
//     .then(res =>console.log(res))
//     .catch(er=>console.log(er))
    
//   }
//   return (
//     <>
//     <input type="file"  onChange={(e)=>setFile(e.target.files[0])}/>
//     <button type='button'onClick={upload}>uplaod</button>
    
//     </>
//   )
// }
