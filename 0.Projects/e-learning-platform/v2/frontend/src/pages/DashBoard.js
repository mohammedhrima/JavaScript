import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import axios from "../axios";

function DashBoard() {
  const [users, setUsers] = useState([]);
  const [courses, setCouses] = useState([]);
  const [orders, setOrders] = useState([]);

  //console.log(users);
  // console.log(courses);
  //users.map((user) => console.log(user));

  useEffect(() => {
    axios
      .get("/orders")
      .then(({ data }) => {
        console.log(data);
        setOrders(
          data.map((elem) => {
            return {
              fullname: elem.owner.firstname + " " + elem.owner.lastname,
              course: elem.course[0].fulltitle,
              date: elem.date,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  /* setTimeout(() => {
    console.log(orders);
  }, 2000);*/

  return (
    <div className="dashboard_container">
      <table>
        <tr>
          <th>Full Name</th>
          <th>Course Name</th>
          <th>Date</th>
        </tr>
        {orders.length &&
          orders.map((order) => (
            <tr>
              <td>{order.fullname}</td>
              <td>{order.course}</td>
              <td>{order.date}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default DashBoard;
