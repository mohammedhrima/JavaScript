import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./styles/Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders")
      .then(({ data }) => {
        console.log(data);
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Program type</th>
            <th>Program Name</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.date}</td>
              <td>{order.type}</td>
              <td>{order.ip}</td>
              <td>
                <h4>full name:</h4> {order.user.fullname} <br />
                <h4>address:</h4> {order.user.address} {order.user.city} <br />
                <h4>phone:</h4> {order.user.phone} <br />
                <h4>email:</h4> {order.user.email}
                <br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
