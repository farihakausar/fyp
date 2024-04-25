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
 

  const [  specialty, setSpecialty] = useState()
  const [  experience, setExperience] = useState()
  const[photo,setPhoto]=useState()

  const navgiation=useNavigate();
  // console.log(file,12)
  const reg = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("cpassword",cpassword);
    formData.append("email", email);
  
    formData.append("specialty",   specialty);
    formData.append(" experience",    experience);
    formData.append("photo", photo);
    // formData.append("file", file);
    // console.log(title, file);

    const result = await axios.post(
      `/api/teacher/register`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result,"reulst from frontwend");
    localStorage.setItem("user",JSON.stringify(result))
   
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      navigate("/service")
      // getPdf();
    }
  };




 
  

  
  return (
    <>
    {/* <div className='bg-cover bg-center bg-blue-200 ' style={{ backgroundImage: 'url(https://media.istockphoto.com/id/948623158/vector/seamless-innovation-and-scientific-data-background.jpg?s=612x612&w=0&k=20&c=IHOut6hIYjxiY5MZlu1gDd4_K886MhfVpfUQxYLr16E=)'}}>
     <div class="lg:w-1/3 md:w-1/2  flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0 ">
      <h2 class="text-white text-lg mb-1 font-medium m-auto title-font">Login</h2>
      <p class="leading-relaxed mb-5 text-white m-auto">Welcome to the education revolution</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-white">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email"  value={email}

onChange={(e)=>setEmail(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-white">Subects speciltity</label>
        <textarea id="message" name="message" value={interestedSubjects} onChange={(e)=>setInterestedSubjects(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-white">Education experience</label>
        <textarea id="message" name="message" value={eduaction} onChange={(e)=>setEduaction(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Password </label>
        <input type="email" id="email" name="email"  value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Confirm Password </label>
        <input type="email" id="email" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="file"class="leading-7 text-sm text-white">Upload Pic</label>
        <input type="file" class="leading-7 text-sm text-white"  onChange={(e)=>setFile(e.target.files[0])}/>
   
    
 
      </div>
      
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"  ><a href="/service">Login in</a></button>
      <p class="text-xs text-white mt-3 m-auto">Already have a account?  <span className='underline' ><a href="/signupTeacher">Sign up</a></span></p>
    </div>
    </div>
     */}
      <div className='bg-cover bg-center bg-blue-200 ' style={{ backgroundImage: 'url(https://media.istockphoto.com/id/948623158/vector/seamless-innovation-and-scientific-data-background.jpg?s=612x612&w=0&k=20&c=IHOut6hIYjxiY5MZlu1gDd4_K886MhfVpfUQxYLr16E=)'}}>
     <div class="lg:w-1/3 md:w-1/2  flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0 ">
      <h2 class="text-white text-lg mb-1 font-medium m-auto title-font">Login</h2>
      <p class="leading-relaxed mb-5 text-white m-auto">Welcome to the education revolution</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-white">Name</label>
        <input type="text" id="name" name="nameing" value={name} onChange={(e)=>{setName(e.target.value)}} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email"  value={email}

onChange={(e)=>setEmail(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="  specialty" class="leading-7 text-sm text-white">specialt</label>
        <textarea id="  specialty" name="  specialty" value={  specialty} onChange={(e)=>setSpecialty(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div class="relative mb-4">
        <label for="  experience" class="leading-7 text-sm text-white">  experience</label>
  <textarea id="  experience" name="  experience" value={    experience} onChange={(e)=>setExperience(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-white">Password </label>
        <input type="text" id="email" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="cpassword" class="leading-7 text-sm text-white">Confirm Password </label>
        <input type="text" id="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
      <input
        
        type="file"
        name="photo"
        placeholder="  specialty"
        id="photo"
        onChange={(e)=>{setPhoto(e.target.files[0])}}
        // onChange={(e) => handleChange(e)}
      />
      </div>
      
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={(e) => { reg(e)}}>Login in</button>
      <p class="text-xs text-white mt-3 m-auto">Already have a account?  <span className='underline' ><a href="/signupTeacher">Sign up</a></span></p>
    </div>
    </div>
    </>
  )
}
