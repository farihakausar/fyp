// import React from 'react'

// export default function CourseDetail() {
//   return (
//     <div class="bg-white py-6 sm:py-8 lg:py-12">
//   <div class="mx-auto max-w-screen-lg px-4 md:px-8">
//     <div class="grid gap-8 md:grid-cols-2">
 
//       <div class="space-y-4">
//         <div class="relative overflow-hidden rounded-lg bg-gray-100">
//           <img src="https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

//           <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
//         </div>

//         {/* <div class="grid grid-cols-2 gap-4">
//           <div class="overflow-hidden rounded-lg bg-gray-100">
//             <img src="https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />
//           </div>

//           <div class="overflow-hidden rounded-lg bg-gray-100">
//             <img src="https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />
//           </div>
//         </div> */}
//       </div>
 
//       <div class="md:py-8">
     
//         <div class="mb-2 md:mb-3">
//           <span class="mb-0.5 inline-block text-gray-500">Fancy Brand</span>
//           <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">course name </h2>
//         </div>
      
//         {/* <div class="mb-6 flex items-center md:mb-10">
//           <div class="-ml-1 flex gap-0.5">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           </div>

//           <span class="ml-2 text-sm text-gray-500">4.2</span>

//           <a href="#" class="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view all 47 reviews</a>
//         </div> */}
        
      
       
//         <div class="mb-8 md:mb-10">
//           <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">lanagiase</span>

//           <div class="flex flex-wrap gap-3">
//             <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">englisjh</button>
//             <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">uirdu</button>
//             <span class="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">M</span>
//             <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">L</button>
//             <span class="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">XL</span>
//           </div>
//         </div>
      
//         <div class="mb-4">
//           <div class="flex items-end gap-2">
//             <span class="text-xl font-bold text-gray-800 md:text-2xl">$15.00</span>
//             <span class="mb-0.5 text-red-500 line-through">$30.00</span>
//           </div>

//           <span class="text-sm text-gray-500">incl. VAT plus shipping</span>
//         </div>
      
//         <div class="mb-6 flex items-center gap-2 text-gray-500">
//         <span class="text-sm text-blue-500 font-bold">technlogies</span>

//           <span class="text-sm">html css java scrpit </span>
//           <span class="text-sm text-blue-500 font-bold">tolls</span>
//           <br></br>
//           <span class="text-sm">vs code  </span>
//         </div>
      
//         <div class="flex gap-2.5">
//           <a href="/enrolled" class="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">enrolled</a>

//           <a href="/fav" class="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </a>
//         </div>
     
//         <div class="mt-10 md:mt-16 lg:mt-20">
//           <div class="mb-3 text-lg font-semibold text-gray-800">Description</div>

//           <p class="text-gray-500">
//             This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.<br /><br />

//             This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
//           </p>
//         </div>
        
//       </div>
    
//     </div>
//   </div>
// </div>
//   )
// }
import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 
import Header from '../../componenents/Header';
import Footer from '../../componenents/Footer';
import axios from 'axios'
import courseImg from "../../assests/coursem.jpeg";

export default function CourseDetail() {
  const [teacherRequest, setTeacherRequest] = useState(null);
  const [ courseId,  setCourseId] = useState();
  const { id } = useParams(); 
  const [userData,setUserData]=useState()
  const [userId,setUserId]=useState()
  const getPdf= async()=>{
    try {
      const resgh=await fetch('/api/users/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        }
      })
      const data =await resgh.json()
      setUserData(data)
      setUserId(data._id)
      console.log(data,"datafromabout")
      if(!res.status===200){
        const error=new Error(res.error)
        throw error

      }
    } catch (error) {
      // history.push("/login")
      console.log("nkljkl")
    }
  }

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/admin/courses/${id}`);
        setTeacherRequest(response.data);
        setCourseId(response.data._id);
        console.log("teacher speicf",response.data._id)
      } catch (error) {
        console.error('Error fetching teacher request:', error);
        // Handle any errors or display error messages here
      }
    };

    // Call the fetchTeacherRequest function when the component mounts
    getPdf();
    fetchTeacherRequest();

    // Clean up function (optional)
    return () => {
      // Any cleanup code here, if needed
    };
  }, []);
  return (
    <>
    <Header />
    {userData ? (
       <>
    {teacherRequest && (
      <>
    <div className="bg-blue-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid gap-8 md:grid-cols-2 p-6">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={courseImg}
                  loading="lazy"
                  alt="Web Development"
                  className="h-full w-full object-contain object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  Sale
                </span>
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                 
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                   {teacherRequest.courseName}
                </h2>
              </div>

              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Language
                </span>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    Urdu
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    $15.00
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $30.00
                  </span>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <span className="text-sm text-blue-500 font-bold">
                  Technologies
                </span>
                <span className="text-sm"> {teacherRequest.tech}</span>
                <span className="text-sm text-blue-500 font-bold">Tools</span>
                <span className="text-sm"> {teacherRequest.tool}</span>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="/coursemat"
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Enrolled
                </a>
                <a
                  href={`/fav/${userId}/${courseId}`}
                  className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-10 md:mt-16 lg:mt-20">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>

                <p className="text-gray-500">
                {teacherRequest.courseDesc}
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )}

</> ):
         <p className='text-black'>losdpkp</p>
            }
    </>
  );
}
