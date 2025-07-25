import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartItems,
    delivery_fee,
    products,
    getCartCount,
    getCartAmount,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      // Fixed: Changed 'item' to 'items' to match backend expectation
      let orderData = {
        address: formData,
        items: orderItems, // Changed from 'item' to 'items'
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
            toast.success("Order placed successfully!");
          } else {
            toast.error(response.data.message);
          }
          break;

       case "stripe":
  try {
    const responseStripe = await axios.post(
      backendUrl + "/api/order/stripe",
      orderData,
      { headers: { token } }
    );
    
    if (responseStripe.data.success) {
      const { session_url } = responseStripe.data;
      
      window.location.href = session_url; 
   
    } else {
      toast.error(responseStripe.data.message);
    }
  } catch (error) {
    console.error("Stripe payment error:", error);
    toast.error("Failed to initiate Stripe payment");
  }
  break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            type="text"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            placeholder="Last Name"
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          required
          placeholder="Email Address"
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
        />
        <input
          required
          placeholder="Street"
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          type="text"
          className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            required
            placeholder="City"
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            placeholder="State"
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            placeholder="Zip Code"
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            placeholder="Country"
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          required
          placeholder="Phone"
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          className="border border-gray-200 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHODS"} />
          {/* Payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
