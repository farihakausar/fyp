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
import React ,{useState,useEffect}from "react";
import { FaDesktop, FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import moneyImg from "../../../assests/money.jpg"
import Header from "../../Header";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Footer from "../../Footer";


export default function PaymentOnlinemodule() {
  const stripe = useStripe();
  const elements = useElements();
  const [cardDetails, setCardDetails] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [email, setEmail] = useState("");
  const [cardElement, setCardElement] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch("/api/users/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    setLoading(true);

    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();

      if (error) {
        console.log("Unable to process payment");
        return;
      }

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { email },
        },
      });

      if (confirmError) {
        console.log("Payment Confirmation Error:", confirmError.message);
        alert(`Payment Confirmation Error: ${confirmError.message}`);
      } else {
        console.log("Payment Successful ", paymentIntent);
        alert("Payment Successful");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  };
  // const handleStripePayment = async () => {
  //   try {
  //     const response = await fetch("/create-payment-intent", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     setClientSecret(data.clientSecret);
  //   } catch (error) {
  //     console.error("Error fetching client secret:", error);
  //   }
  // };
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
          <button    onClick={handlePayPress}className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a  className="flex items-center text-white">
              <FaDesktop className="mr-2" />
              Online
            </a>
          </button>
          <div style={{flex: 1,
      justifyContent: "center",
      margin: 20}}>
      
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{backgroundColor: "#efefef",
        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
        marginBottom: 20,}}
      />
      <button onClick={handlePayPress} disabled={loading}>Pay</button>
    </div>
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/cash" className="flex items-center text-white">
              <FaMoneyBill className="mr-2 " />
              Cash
            </a>
          </button>
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/specifiteacher" className="flex items-center text-white">
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
