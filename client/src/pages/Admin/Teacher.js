import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

import { Tabs } from "antd";
import Header from "./Header";

function Teacher() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setloading] = useState();
//   const [error, seterror] = useState([]);
//   useEffect(() => {
//        if(!JSON.parse(localStorage.getItem("user")).isAdmin){
//     window.location.href="/home"
//        }
//           }, [])

  return (
    <>
    <Header/>
    <div className="flex h-screen">
     
    <Sidebar />
    <div className="flex-1 bg-gray-200">
    <div className=" text-center">
    <h5  className=" text-center text-customBlue font-medium italic" style={{ fontSize: "50px" }}>Teachers 
      </h5>
   
    
      <div className="p-6">
        
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane  tab={<span style={{ color: '#FF6347',fontStyle:"italic"  }}>RequestTeacher</span>}   key="1">
            <RequestTeacher/>
          </Tabs.TabPane>
          <Tabs.TabPane   tab={<span style={{ color: '#FF6347',fontStyle:"italic"  }}> ApprovedTeacher</span>} key="2">
            <ApprovedTeacher />
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
    </>
  );
}

export default Teacher;

// export function Bookings() {
// //   const [bookings, setbookings] = useState([]);
// //   const [loading, setloading] = useState(true);
// //   const [error, seterror] = useState();
// //   useEffect(() => {
// //     async function fetchMyAPI() {
// //       try {
// //         // setloading(true)
// //         const data = await (await axios.get("/api/bookings/getallbookings")).data;
// //         setbookings(data);
// //         setloading(false);
// //       } catch (err) {
// //         seterror(err);
// //         console.log(err);
// //         setloading(false);
// //       }
// //     }

// //     fetchMyAPI();
// //   }, []);

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-10">
//           <h6>bookings</h6>
       
//           {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
//            <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
//             <thead className="thead-dark">
//               <tr>
//                 <th>Booking Id</th>
//                 <th>User Id</th>
//                 <th>Room</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.length &&
//                 bookings.map((booking) => {
//                   return (
//                     <>
//                       <tr>
//                         <td>{booking._id}</td>
//                         <td>{booking.userid}</td>
//                         <td>{booking.room}</td>
//                         <td>{booking.fromdate}</td>
//                         <td>{booking.todate}</td>
//                         <td>{booking.status}</td>
//                       </tr>
//                     </>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export function Rooms() {
//   const [rooms, setrooms] = useState([]);
//   const [loading, setloading] = useState(true);
//   const [error, seterror] = useState();
//   useEffect(() => {
//     async function fetchMyAPI() {
//       try {
//         // setloading(true)
//         const data = await (await axios.get("/api/rooms/getallrooms")).data;
//         setrooms(data);
//         setloading(false);
//       } catch (err) {
//         seterror(err);
//         console.log(err);
//         setloading(false);
//       }
//     }

//     fetchMyAPI();
//   }, []);

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-10">
//           <h6>Rooms</h6>
         
//            <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
//             <thead className="thead-dark">
//               <tr>
//                 <th>Room Id</th>
//                 <th> Name</th>
//                 <th>Type</th>
//                 <th>Rent per day</th>
//                 <th>Max count</th>
//                 <th>Phone number</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rooms.length &&
//                 rooms.map((room) => {
//                   return (
//                     <>
//                       <tr>
//                         <td>{room._id}</td>
//                         <td>{room.name}</td>
//                         <td>{room.type}</td>
//                         <td>{room.rentperday}</td>
//                         <td>{room.maxcount}</td>
//                         <td>{room.phonenumber}</td>
//                       </tr>
//                     </>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
// export function User() {
//   const [users, setusers] = useState([]);
//   const [loading, setloading] = useState(true);
//   const [error, seterror] = useState();
//   useEffect(() => {
//     async function fetchMyAPI() {
//       try {
//         // setloading(true)
//         const data = await (await axios.get("/api/users/getallusers")).data;
//         setusers(data);
//         setloading(false);
//       } catch (err) {
//         seterror(err);
//         console.log(err);
//         setloading(false);
//       }
//     }

//     fetchMyAPI();
//   }, []);
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-10">
//           <h6>Users</h6>
//           {loading && <Loader />}
//            <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
//             <thead className="thead-dark">
//               <tr>
//                 <th>User Id</th>
//                 <th> Name</th>
//                 <th>Email</th>
//                 <th>Is Admin</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users &&
//                 users.map((user) => {
//                   return (
//                     <>
//                       <tr>
//                         <td>{user._id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.isAdmin ? "Yes" : "No"}</td>
//                       </tr>
//                     </>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export function Addrooms() {
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState([]);
//   const [name, setname] = useState();
//   const [rentperday, setrentperday] = useState();
//   const [maxcount, setmaxcount] = useState();
//   const [description, setdescription] = useState();
//   const [phonenumber, setphonenumber] = useState();
//   const [type, settype] = useState();
//   const [imageurl2, setimageurl2] = useState();
//   const [imageurl1, setimageurl1] = useState();
//   const [imageurl3, setimageurl3] = useState();

//   async function addroom() {
//     const newroom = {
//       name,
//       rentperday,
//       maxcount,
//       description,
//       phonenumber,
//       type,
//       imageurls: [imageurl1, imageurl2, imageurl3],
//     };
//     // console.log(newroom)
//     try {
//       setloading(true);
//       const result = await (
//         await axios.post("/api/rooms/addroom", newroom)
//       ).data;
//       console.log(result);
//       setloading(false);
//       // Swal.fire("congrats","your new room added successfully","success").then(result=>{
//       //   window.location.href="/home"
//       // })
//     } catch (error) {
//       console.log(error);
//       setloading(false);
//       // Swal.fire("opps","something went wrong","error")
//     }
//   }
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-5">
//           {loading && <Loader />}
//           <input
//             type="text"
//             placeholder="name"
//             value={name}
//             onChange={(e) => {
//               setname(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="rentperday"
//             value={rentperday}
//             onChange={(e) => {
//               setrentperday(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="max count"
//             value={maxcount}
//             onChange={(e) => {
//               setmaxcount(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="description"
//             value={description}
//             onChange={(e) => {
//               setdescription(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="phonenumber"
//             value={phonenumber}
//             onChange={(e) => {
//               setphonenumber(e.target.value);
//             }}
//           />
//         </div>

//         <div className="col-md-5">
//           <input type="text" placeholder="type" value={type}onChange={(e) => {
//               settype(e.target.value);
//             }} />
//           <input
//             type="text"
//             placeholder="imageurl1"
//             value={imageurl1}
//             onChange={(e) => {
//               setimageurl1(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="imageurl2"
//             value={imageurl2}
//             onChange={(e) => {
//               setimageurl2(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="imageurl3"
//             value={imageurl3}
//             onChange={(e) => {
//               setimageurl3(e.target.value);
//             }}
//           />
//           <div>
//             <button onClick={addroom}>Add room</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


export function RequestTeacher() {
  return (
    <div className="row">
        <div className="col-md-10">
          
        <h6 className=" text-center mb-2 text-customBlue font-medium italic" style={{ fontSize: "20px" }}>Requested Teacher </h6>
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
             <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
            <thead className="thead-dark">
            <tr style={{ fontFamily: 'Arial', fontStyle: 'italic', color: 'blue', color:"white" }}>
                  <th> Nmae</th>
                    <th>specailty</th>
                   
                     <th>timing</th>
                  <th>home/onine</th>
                  
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
                     
                     <tr style={{ fontFamily: 'Arial',fontSize:'16px', color: 'blue', color:"white" }}>
  <td><a href="/detailteacher">this</a></td>
  <td><a href="/detailteacher">this</a></td>
  <td><a href="/detailteacher">this</a></td>
  <td><a href="/detailteacher">this</a></td>
  <td><a href="/detailteacher">this</a></td>
  <td><a href="/detailteacher">this</a></td>
</tr>

                </tbody>
              </table>
            </div>
          </div>
  )
}


export function ApprovedTeacher () {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6 className=" text-center mb-2 text-customBlue font-medium italic" style={{ fontSize: "20px" }}>ApprovedTeacher </h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
             <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
            <thead className="thead-dark">
                 <tr>
                  <th> Nmae</th>
                    <th>specailty</th>
                   
                     <th>ApprovedTeacher on</th>
                  <th>study details</th>
                  <th>badge added by admin</th>
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

