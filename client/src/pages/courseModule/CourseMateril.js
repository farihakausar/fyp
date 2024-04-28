import React from 'react'
import Header from '../../componenents/Header';
import Footer from '../../componenents/Footer';
import courseImg from "../../assests/coursem.jpeg";
import { Tabs } from "antd";
export default function CourseMateril() {


  return (

    <>
    <Header/>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row ">
  
      <div class="order-first h-48 md:h-80 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
       
       
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />

        <div className="md:p-8">
              <div className="mb-2 md:mb-3">
                
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Course Name 
                </h2>
              </div>

           
            

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <span className="text-sm text-blue-500 font-bold">
                  Technologies
                </span>
                <span className="text-sm">HTML, CSS, JavaScript </span>
                <span className="text-sm text-blue-500 font-bold">Tools</span>
                <span className="text-sm">VS Code </span>
              </div>


              <div className="mt-2 md:mt-2 lg:mt-2">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>

                <p className="text-gray-500">
             
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                  <br />
                  
                </p>
              </div>
            </div>
      </div>
      
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

        <p class="mb-8 max-w-md text-gray-600">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <video class="w-full h-auto max-w-full" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

        <div class="mt-7">
          <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">show pdff</a>
          <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring m-5 active:bg-gray-200 md:text-base">back</a>
        </div>
      </div>
     
    </div>
  </div>
</div>
<Footer/>
  </>
  )
}

export function CompletedCourse() {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6>CompletedCourse</h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
            <table className="table table-bordered table-dark">
            <thead className="thead-dark">
            <tr>
                  <th>Course Nmae</th>
                    <th>Course stack</th>
                   
                     <th>Enrolled on</th>
                  <th>grades</th>
                  
                  <th>Completed on </th>
                  <th>Certificate dwonload</th>
                  </tr>
               </thead>
                <tbody>
                {/* {bookings.length &&
                    bookings.map((booking) => {
                      return (
                        <>
                          <tr>
                            <td>{booking._id}</td>
                            <td>{booking.userid}</td>
                            <td>{booking.room}</td>
                            <td>{booking.fromdate}</td>
                            <td>{booking.todate}</td>
                            <td>{booking.status}</td>
                          </tr>
                        </>
                      );
                    })} */}
                     
                          <tr>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                           
                          </tr>
                     
                </tbody>
              </table>
            </div>
          </div>
  )
}


export function Enrolled () {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6>Enrolled cousrese</h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
            <table className="table table-bordered table-dark">
            <thead className="thead-dark">
                 <tr>
                  <th>Course Nmae</th>
                    <th>Course stack</th>
                   
                     <th>Enrolled on</th>
                  <th>To</th>
                  <th>Course status</th>
                  </tr>
               </thead>
                <tbody>
                {/* {bookings.length &&
                    bookings.map((booking) => {
                      return (
                        <>
                          <tr>
                            <td>{booking._id}</td>
                            <td>{booking.userid}</td>
                            <td>{booking.room}</td>
                            <td>{booking.fromdate}</td>
                            <td>{booking.todate}</td>
                            <td>{booking.status}</td>
                          </tr>
                        </>
                      );
                    })} */}
                     
                          <tr>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            
                           
                          </tr>
                     
                </tbody>
              </table>
            </div>
          </div>
  )
}