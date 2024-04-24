import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import Sidebar from "./Sidebar";
import { Tabs } from "antd";
import Header from "./Header";
import { useParams } from 'react-router-dom';

export default function Editcourse() {
  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [language, setLanguage] = useState('English');
  const [videoURL, setVideoURL] = useState('');
  const [tech, setTech] = useState('');
  const [tool, setTool] = useState('');
  const[photo,setPhoto]=useState()
  const [pptFile, setPptFile] = useState(null);
  const { room } = useParams();
  const [formData, setFormData] = useState({
    photo: '',
    courseName: '',
    courseDesc: '',
    videoURL: '',
    pptFile: '',
    tech: '',
    tool: ''
  });
  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(`/api/admin/courses/${room}`);
        const courseData = response.data;
        // Update the state with the existing course data
        setFormData({
          photo: courseData.photo,
          courseName: courseData.courseName,
          courseDesc: courseData.courseDesc,
          videoURL: courseData.videoURL,
          pptFile: courseData.pptFile,
          tech: courseData.tech,
          tool: courseData.tool
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchCourse();
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/courses/${room}`, formData);
      // Redirect or display success message after successful update
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Here you can handle the form submission, like sending the data to your backend
    //   console.log('Course Name:', courseName);
    //   console.log('Course Description:', courseDesc);
    //   console.log('Language:', language);
    //   console.log('Video URL:', videoURL);
    //   console.log('PPT File:', pptFile);
    //   // Reset form fields
    //   setCourseName('');
    //   setCourseDesc('');
    //   setLanguage('English');
    //   setVideoURL('');
    //   setPptFile(null);
    // };
    return (
   
     <>
      <Header/>
  
      <div className="flex h-screen">
      <Sidebar />
      <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Photo:</label>
          <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
        </div>
        <div>
          <label>Course Name:</label>
          <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="courseDesc" value={formData.courseDesc} onChange={handleChange} />
        </div>
        <div>
          <label>Video URL:</label>
          <input type="text" name="videoURL" value={formData.videoURL} onChange={handleChange} />
        </div>
        <div>
          <label>PPT File:</label>
          <input type="text" name="pptFile" value={formData.pptFile} onChange={handleChange} />
        </div>
        <div>
          <label>Technology:</label>
          <input type="text" name="tech" value={formData.tech} onChange={handleChange} />
        </div>
        <div>
          <label>Tool:</label>
          <input type="text" name="tool" value={formData.tool} onChange={handleChange} />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
      <div className="flex-1 bg-gray-20 m-4">
     
      <h5  className=" text-center text-customBlue font-medium italic" style={{ fontSize: "50px" }}>EDit course
      </h5>
      <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="sm:col-span-4">
            <div className="col-span-full">
            {/* <label htmlFor="course-name" className="block text-sm font-medium leading-6 text-gray-900">
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
              </div> */}
               <label htmlFor="course-name" className="block text-sm font-medium leading-6 text-gray-900">
        <span className="italic text-blue-500">Course Name</span>
      </label>
      <div className="mt-2">
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          id="course-name"
          name="course-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          style={{ outline: '1px solid #4F46E5' }}
        />
            </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="add course name" className="block text-sm font-medium leading-6 text-gray-900">
              <span className="italic text-blue-500">mTechnlogies</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={tech}

                  style={{ outline: '1px solid #4F46E5' }}
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
              <span className="italic text-blue-500">tools</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={tool}
                  style={{ outline: '1px solid #4F46E5' }}
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
              <span className="italic text-blue-500">langauges</span>
              </label>
              <div className="mt-2">
                <select
                  id="language"
                  name="language"
                  style={{ outline: '1px solid #4F46E5' }}
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
              <span className="italic text-blue-500">Course desc</span>
              </label>
              <div className="mt-2">
                <textarea
                   value={courseDesc}
                   style={{ outline: '1px solid #4F46E5' }}
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
            <span className="italic text-blue-500">Cover photo</span>
              </label>
          
              
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* < PictureOutlined className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                      htmlFor="photo"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600  focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
              
                    
                      <span>Upload a file</span>
                      <input
        style={{ outline: '1px solid #4F46E5' }}
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
              <span className="italic text-blue-500">Video url</span>
              </label>
              <div className="mt-2">
                <input
                style={{ outline: '1px solid #4F46E5' }}
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
              <span className="italic text-blue-500"> Upload pdf file</span> 
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
                      style={{ outline: '1px solid #4F46E5' }}
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
          className="rounded-md bg-customBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  "
        >
         EDitCourse
        </button>
      </div>
    </form>
    </div>
    </div>
    </>
    )
}
