// import React from "react";

// export default function Pricngoption() {
//   return (
//     <>
//       <div class="p-12  flex flex-col items-start">
//         <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2 m-auto">
//           Prcing potion
//         </h2>
//         <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
//           <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             <a href="/online">Online</a>
//           </button>
//           <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             <a href="/cash">Cash</a>
//           </button>
//           <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             <a href="/student">Done</a>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import { FaDesktop, FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import moneyImg from "../../assests/money.jpg"
import Header from "../Header";
import Footer from "../Footer";

export default function Payment() {
  return (
    <>
    <Header/>
    <div className="p-12 flex flex-col md:flex-row items-center">
      {/* Left Section with Image */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={moneyImg}
          alt="Money"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Right Section with Pricing Options */}
      <div className="md:w-1/2 md:ml-6">
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-6">
          Pricing Options
        </h2>
        <div className="bg-white flex flex-col w-full md:py-8">
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/online" className="flex items-center text-white">
              <FaDesktop className="mr-2" />
              Online
            </a>
          </button>
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/cash" className="flex items-center text-white">
              <FaMoneyBill className="mr-2 " />
              Cash
            </a>
          </button>
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/homeclass" className="flex items-center text-white">
              <FaUserGraduate className="mr-2 " />
              Done
            </a>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
