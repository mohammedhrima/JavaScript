import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUserMutation } from "../services/appApi";
import "./CheckoutForm.css";
import image from "../images/image_LOGO.png";

function CheckoutForm({ addedcourse }) {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user);
  const [paying, setPaying] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  //const [updateUser, { error, isError, iseSuccess }] = useUpdateUserMutation();
  const [course, updateCourse] = useState([...user.paid]);
  const [updateUser, { error, isError, isSuccess, isLoading }] =
    useUpdateUserMutation();
  const navigate = useNavigate();
  //console.log(course);
  /*
  setTimeout(() => {
    // navigate("/");
    // console.log(course);
  }, 10000);*/

  async function handlePay(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true);
    const { client_secret } = await fetch(
      "http://localhost:8000/create-payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
        body: JSON.stringify({ amount: addedcourse.price }),
      }
    ).then((res) => res.json());
    const { paymentIntent } = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    setPaying(false);
    //after paying
    if (paymentIntent) {
      console.log(course);
      console.log(addedcourse);

      updateUser({
        course: [...course, addedcourse._id],
        id: user._id,
      });
      if (!isLoading && !isError) {
        setTimeout(() => navigate("/courses"), 2000);
      }
    }
  }

  return (
    <form onSubmit={handlePay} className="checkout_container">
      <div>
        {alertMessage && <alert>{alertMessage}</alert>}
        <h1>First Name</h1>
        <input type="text" value={user.firstname} disabled />
        <h1>last Name</h1>
        <input type="text" value={user.lastname} disabled />
        <h1>Email</h1>
        <input type="email" value={user.email} disabled />
        <div className="payment_card">
          <label htmlFor="card-element">Card</label>
          <CardElement id="card-element" />
        </div>
        <button type="submit" disabled={paying || isLoading}>
          <h2>{paying ? "Proccessing ..." : "Pay course"}</h2>
        </button>
      </div>
      <div>
        <img src={image} className="checkout_image" />
      </div>
    </form>
  );
}

export default CheckoutForm;
