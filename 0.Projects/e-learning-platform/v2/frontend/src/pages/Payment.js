import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Payment.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LTdFILWMzyB3kQdxMeG5IuyqovFEwJRTfFuV0nUhoYkBNBB0qBd96TclLvBPpoWjSrDPRW4WMfzL8nI3kR7An6Q00ja03RFFI"
);

function Payment() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/courses/${id}`)
      .then(
        ({ data }) => {
          // console.log("data is", data);
          setCourse(data);
          // Navigate("/");
        },
        [id]
      )
      .catch((err) => console.log(err));
  });

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm addedcourse={course} />
    </Elements>
  );
}

export default Payment;
