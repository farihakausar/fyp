// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
// import { CardField, useConfirmPayment,useStripe } from "@stripe/stripe-react-native";

// //ADD localhost address of your server
// // const API_URL = "http://localhost:3000";

// const StripeApp = props => {
//   const [email, setEmail] = useState();
//   const [cardDetails, setCardDetails] = useState();
//   const { confirmPayment, loading } = useConfirmPayment();
//   const { presentPaymentSheet } = useStripe();
//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(`http://192.168.100.26:3000/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const { clientSecret, error } = await response.json();
//     return { clientSecret, error };
//   };

//   const handlePayPress = async () => {
//     //1.Gather the customer's billing information (e.g., email)
//     if (!cardDetails?.complete || !email) {
//       Alert.alert("Please enter Complete card details and Email");
//       return;
//     }
//     const billingDetails = {
//       email: email,
//     };
//     //2.Fetch the intent client secret from the backend
//     try {
//       const { clientSecret, error } = await fetchPaymentIntentClientSecret();
//       //2. confirm the payment
//       if (error) {
//         console.log("Unable to process payment");
//       } else {
//         const { paymentIntent, error } = await confirmPayment(clientSecret, {
//           paymentMethodType: "Card",
//           billingDetails: billingDetails,
//         });
//         if (error) {
//           alert(`Payment Confirmation Error itsme ${error.message}`);
//           console.log(error.message)
//         } else if (paymentIntent) {
//           alert("Payment Successful");
//           console.log("Payment successful ", paymentIntent);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     //3.Confirm the payment with the card details
//   };
// const handleGooglePayPress = async () => {
//     try {
//       const { error } = await presentPaymentSheet({
//         type: "Payment",
//         testEnv: true, // Change this to false for production
//       });
//       if (error) {
//         console.error("Google Pay error:", error);
//         Alert.alert("Google Pay Error", "Failed to process payment using Google Pay");
//       } else {
//         Alert.alert("Google Pay Success", "Your payment was successful");
//         console.log("Google Pay successful");
//       }
//     } catch (error) {
//       console.error("Google Pay error:", error);
//       Alert.alert("Google Pay Error", "An error occurred while processing your payment with Google Pay");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="E-mail"
//         keyboardType="email-address"
//         onChange={value => setEmail(value.nativeEvent.text)}
//         style={styles.input}
//       />
//       <CardField
//         postalCodeEnabled={true}
//         placeholder={{
//           number: "4242 4242 4242 4242",
//         }}
//         cardStyle={styles.card}
//         style={styles.cardContainer}
//         onCardChange={cardDetails => {
//           setCardDetails(cardDetails);
//         }}
//       />
//       <Button onPress={handlePayPress} title="Pay" disabled={loading} />
//       <Button onPress={handleGooglePayPress} title="Pay with Google Pay" disabled={loading} />
//     </View>
//   );
// };
// export default StripeApp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     margin: 20,
//   },
//   input: {
//     backgroundColor: "#efefefef",

//     borderRadius: 8,
//     fontSize: 20,
//     height: 50,
//     padding: 10,
//   },
//   card: {
//     backgroundColor: "#efefefef",
//   },
//   cardContainer: {
//     height: 50,
//     marginVertical: 30,
//   },
// });
import React, { useState } from "react";

import { useStripe } from "@stripe/react-stripe-js";

// ADD your server endpoint here
// const API_URL = "http://localhost:3000";

const StripeApp = () => {
  const [email, setEmail] = useState("");
  const [cardElement, setCardElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

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

  return (
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
  );
};

export default StripeApp;

