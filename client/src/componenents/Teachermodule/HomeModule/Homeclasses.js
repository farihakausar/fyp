import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
// import Sidebar from "./Sidebar";
import { Tabs } from "antd";

 

function Homeclasses() {


  return (
    <div className="flex h-screen">
    {/* <Sidebar /> */}
    <div className="flex-1 bg-gray-20">
    <div>
      <h5  className=" text-center" style={{ fontSize: "50px" }}>your course details 
      </h5>
   
   <div className="p-6">
        
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="StartedandPaying" key="1">
            <StartedandPaying/>
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

export default Homeclasses;




export function StartedandPaying() {
  
  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [language, setLanguage] = useState('English');
  const [videoURL, setVideoURL] = useState('');
  const [tech, setTech] = useState('');
  const [tool, setTool] = useState('');
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
      // if (pptFile) {
      //   formData.append('pptFile', pptFile);
      // }

      const response = await axios.post('http://localhost:5000/api/admin/courses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Course added successfully:', response.data);
      // Reset form fields
      setCourseName('');
      setCourseDesc('');
      setLanguage('English');
      setTech('');
      setTool('');
      setVideoURL('');
      // setPptFile(null);
      console.log("doennknlk")
    } catch (error) {
    console.log("hkln")
      console.error('Error adding course:', error);
    }
  };
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
                  <th> enrolled studenst</th>
                  </tr>
               </thead>
                <tbody>
              
                          <tr>
                          <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
                            
                           
                          </tr>
                     
                </tbody>
              </table>
              <div className="mt-10">
          <button
            type="submit"
            className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
         <a href="/addhomeservice">  Add more course </a> 
          </button>
            </div>
            </div>
          </div>
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
                  <th> enrolled studenst</th>
                  </tr>
               </thead>
                <tbody>
              
                          <tr>
                          <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
  <td><a href="/specificService">this</a></td>
                            
                           
                          </tr>
                     
                </tbody>
              </table>
              <div className="mt-10">
          <button
            type="submit"
            className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
         <a href="/addhomeservice">  Add more course </a> 
          </button>
            </div>
            </div>
          </div>
  )
}

