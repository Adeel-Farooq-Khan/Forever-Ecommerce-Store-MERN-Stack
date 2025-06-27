import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, serOrders] = useState([]);

  const fetchallOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        serOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
      console.log(orders);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchallOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => {
          <div key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              {order.item.map((item, index) => {
                if (index === order.item.length -1) {
                  return (
                    <p key={index}>
                      {item.name} x {item.quantity} <span> {item.size}</span>{" "}
                    </p>
                  );
                } else {
                  return (
                    <p key={index}>
                      
                      {item.name} x {item.quantity} <span> {item.size}</span> ,
                    </p>
                  );
                }
              })}
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Orders;
