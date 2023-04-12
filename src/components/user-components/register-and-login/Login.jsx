import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../../../reduxToolkit/alertsReducer";
import api from "../../../api/axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    email,
    password,
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      dispatch(showLoading());
      event.preventDefault();
      const response = await api.post(`/user/doLogin`, userData);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success("login successfull");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  // h-screen
  return (
    <div className="  flex items-center justify-center form-main-login">
      <div className="flex flex-col justify-center items-center shadow-md  form-login">
        <form onSubmit={handleSubmit} className="w-72  max-w-sm">
          <h2 className="text-lg font-medium mb-6 text-purple-400 font-serif  ">
            Sign In
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-gray-300 px-4 py-1 rounded-md hover:bg-blue-900 transition-colors duration-300 ease-in-out"
          >
            Login
          </button>
          <p className="text-white ">
            doesn't have an account?{" "}
            <Link to="/register" className="text-white underline">
              register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
