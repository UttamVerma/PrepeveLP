import React, { useContext } from "react";
import styles from "../styles/Button.module.css";
import { AuthContext } from "../context/AuthContextProvider";
import icon from "./favicon copy.png";

let Button = ({ text }) => {
  let [showForm, setShowForm, setShowLoading] = useContext(AuthContext);
  let loadScript = (src) => {
    return new Promise((resolve) => {
      let script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  let displayRazorpay = async () => {
    let res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Failed");
      return;
    }

    let razorpayOptions = {
      key: "rzp_live_pT5FHOdsUeTDeo",
      amount: 99 * 100,
      currency: "INR",
      name: "Prepeve",
      description: "Payment for the service",
      image: icon,
      handler: function (response) {
        window.location.href = `/thankyou?paymentId=${response.razorpay_payment_id}`;
      },
      prefill: {
        name: "Your Name",
      },
      theme: {
        color: "#ffffff",
      },
    };

    let paymentObj = new window.Razorpay(razorpayOptions);
    paymentObj.open();
  };
  return (
    <button className={styles.buttonComponent} onClick={displayRazorpay}>
      <h1> {text}</h1>
     
    </button>
  );
};

export default Button;
