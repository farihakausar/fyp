import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import Sidebar from "./Sidebar";
import { Tabs } from "antd";

 

function App() {


  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 bg-gray-20">
    <div>
      <h5  className=" text-center" style={{ fontSize: "50px" }}>your course details 
      </h5>
   
   <div className="p-6">
        
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="AddCourse" key="1">
            <AddCourse/>
          </Tabs.TabPane>
          <Tabs.TabPane tab=" Added Course" key="2">
            <AddedCourse />
          </Tabs.TabPane>
          {/* <Tabs.TabPane tab=" add Room" key="3">
            <Addrooms />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Users" key="4">
            <User />
          </Tabs.TabPane> */}
        </Tabs>
      </div>
   
    </div>
    </div>
    </div>
  );
}

export default App;




export function AddCourse() {
  
  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [language, setLanguage] = useState('English');
  const [videoURL, setVideoURL] = useState('');
  const [tech, setTech] = useState('');
  const [tool, setTool] = useState('');
  const[photo,setPhoto]=useState()
  const [pptFile, setPptFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('courseName', courseName);
      formData.append('courseDesc', courseDesc);
      formData.append('language', language);
      formData.append('videoURL', videoURL);
      formData.append('tech', tech);
      formData.append('tool', tool);
      formData.append('photo', photo); 
      if (pptFile) {
        formData.append('pptFile', pptFile);
      }

      // const response = await axios.post('http://localhost:5000/api/admin/addcourses', formData, 
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );
      const response = await axios.post(`/api/admin/addcourses`, formData, 
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

      console.log('Course added successfully:', response.data);
      // Reset form fields
      setCourseName('');
      setCourseDesc('');
      setLanguage('English');
      setTech('');
      setTool('');
      setVideoURL('');
      // setPptFile(null);
      setPhoto();
      console.log("doennknlk")
    } catch (error) {
    console.log("hkln")
      console.error('Error adding course:', error);
    }
  };
  return (
 
   
 
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="sm:col-span-4">
            <div className="col-span-full">
            <label htmlFor="course-name" className="block text-sm font-medium leading-6 text-gray-900">
                Course Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  id="course-name"
                  name="course-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="add course name" className="block text-sm font-medium leading-6 text-gray-900">
             technlogies
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  id="tech"
                  name="tech"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="add course desc" className="block text-sm font-medium leading-6 text-gray-900">
              tools
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={tool}
                  onChange={(e) => setTool(e.target.value)}
                  id="tool"
                  name="tool"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="lang" className="block text-sm font-medium leading-6 text-gray-900">
                Languages
              </label>
              <div className="mt-2">
                <select
                  id="language"
                  name="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  autoComplete="lang-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>English</option>
                  <option>Urdu</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

           

         
          </div>
              
              
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              courseDesc
              </label>
              <div className="mt-2">
                <textarea
                   value={courseDesc}
                   onChange={(e) => setCourseDesc(e.target.value)}
                  id="courseDesc"
                  name="courseDesc"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
             
            </div>


            <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
          
              
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  < PictureOutlined className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                      htmlFor="photo"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
              
                    
                      <span>Upload a file</span>
                      <input
        
        type="file"
        name="photo"
        placeholder="interestedSubjects"
        id="photo"
        onChange={(e)=>{setPhoto(e.target.files[0])}}
        // onChange={(e) => handleChange(e)}
      />
                    </label>
                    <br />
                   
                  </div>
                  <p className="pl-1">or drag and drop</p>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="col-span-full">
              <label htmlFor="video-url" className="block text-sm font-medium leading-6 text-gray-900">
                Video URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={videoURL}
                  onChange={(e) => setVideoURL(e.target.value)}
                  id="videoURL"
                  name="videoURL"
                  autoComplete="videoURL"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="ppt-file" className="block text-sm font-medium leading-6 text-gray-900">
                Upload pdf file
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* <PictureOutlined className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="ppt"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      {/* <span> Upload pdf file</span> */}
                      <input
          type="file"
          class="form-control"
          accept="application/pdf"
          id="ppt"
          required
          onChange={(e) => setPptFile(e.target.files[0])}
        />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PPT files up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Course
        </button>
      </div>
    </form>
  );
}

 


export function AddedCourse () {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6>Added Course cousrese</h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
            <table className="table table-bordered table-dark">
            <thead className="thead-dark">
                 <tr>
                  <th>Course Nmae</th>
                    <th>technlogies</th>
                   
                     <th>tools</th>
                  <th>desc</th>
                  <th>enrolled studenst</th>
                  </tr>
               </thead>
                <tbody>
              
                          <tr>
                          <td><a href="/specificCourse">this</a></td>
  <td><a href="/specificCourse">this</a></td>
  <td><a href="/specificCourse">this</a></td>
  <td><a href="/specificCourse">this</a></td>
  <td><a href="/specificCourse">this</a></td>
  <td><a href="/specificCourse">this</a></td>
                            
                           
                          </tr>
                     
                </tbody>
              </table>
            </div>
          </div>
  )
}

