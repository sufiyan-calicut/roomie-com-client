import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import hotelApi from "../../api/hotelApi";

function HotelSignIn() {
  const navigate = useNavigate();
  const [hotelID, setHotelID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!hotelID) {
        return toast.error("please enter Hotel ID");
      } else if (!password) {
        return toast.error("please enter password");
      } else {
        const response = await hotelApi.post(`/doLogin`, {
          hotelID,
          password,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/login");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center ">
      <div className="flex bg-white items-center justify-center flex-col h-96 w-80  rounded-lg shadow-lg font-thin">
        <h1 className="m-6 font-medium cursor-default">HOTEL SIGN IN</h1>
        <p className="text-gray-500 cursor-default ">
          didn't registered yet?{" "}
          <span
            className=" text-blue-700 hover:underline hover:cursor-pointer "
            onClick={() => navigate("/hotel-register-form")}
          >
            apply
          </span>{" "}
        </p>
        <form className="p-6 " onSubmit={handleSubmit}>
          <label className="block mb-3 font-">Hotel ID</label>
          <input
            className="block mb-3 font-thin  px-4 py-2"
            type="text"
            onChange={(e) => setHotelID(e.target.value)}
          />
          <label className="block mb-3 ">Password </label>
          <input
            className="block mb-3 font-thin px-4 py-2 rounded-lg border border-gray-400"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between">
            <button className="text-white bg-gray-500   py-1 px-2 rounded-md  hover:text-white hover:border-gray-500 hover:bg-gray-700 transition duration-500">
              submit
            </button>
            <p className="text-gray-400 text-sm hover:underline cursor-pointer">
              forget credentials?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HotelSignIn;
