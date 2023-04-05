import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

function ResetPasswordForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!password) {
        return toast.error("please enter new password");
      }
      if (!confirmPassword) {
        return toast.error("re-enter new password");
      }
      if (password != confirmPassword) {
        return toast.error("password do not match");
      } else {
        const response = await api.post(`/user/update-new-password`, {
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
        <h1 className="m-6 font-medium">Forgot password ?</h1>
        <form className="p-6 " onSubmit={handleSubmit}>
          <label className="block mb-3 font-">Enter new password </label>
          <input
            className="block mb-3 font-thin "
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="block mb-3 font-">confirm new password </label>
          <input
            className="block mb-3 font-thin "
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="text-white bg-gray-500   py-1 px-2 rounded-md  hover:text-white hover:border-gray-500 hover:bg-gray-700 transition duration-500">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
