import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

function ForgetPasswordForm() {
  const navigate = useNavigate();
  const [usermail, setUsermail] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!usermail) {
        return toast.error("please enter email");
      }
      const response = await api.post(`/user/reset-password`, { usermail });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/otp-reset");
      } else {
        return toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center ">
      <div className="flex bg-white items-center justify-center flex-col h-96 w-80  rounded-lg shadow-lg font-thin">
        <h1 className="m-6 font-medium">Forgot password ?</h1>
        <form className="p-6 " onSubmit={handleSubmit}>
          <label className="block mb-3 font-">
            Enter your registered email{" "}
          </label>
          <input
            className="block mb-3 font-thin "
            type="email"
            placeholder="email:"
            onChange={(e) => setUsermail(e.target.value)}
          />
          <button className="text-white bg-gray-500   py-1 px-2 rounded-md  hover:text-white hover:border-gray-500 hover:bg-gray-700 transition duration-500">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
