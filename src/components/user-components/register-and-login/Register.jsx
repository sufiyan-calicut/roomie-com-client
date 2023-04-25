import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../../reduxToolkit/alertsReducer';
import api from '../../../api/axios';
// import { FirebaseContext } from "../../../contextStore/FirebaseContext";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userData = {
    name,
    email,
    phone,
    password,
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      if (password != confirmPassword) {
        return toast.error('password do not match');
      }
      dispatch(showLoading());
      const response = await api.post('/user/sendOtp', userData);
      dispatch(hideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/otp');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('something went wrong', error);
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
  // h-screen
  return (
    <div className="  flex items-center justify-center form-main">
      <div className="flex flex-col justify-center items-center shadow-md  form">
        <form onSubmit={sendOtp} className="w-72  max-w-sm">
          <h2 className="text-lg font-medium mb-6 text-purple-400 font-serif  ">
            Sign Up
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              name:
            </label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              phone:
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-1 text-sm "
            >
              confirm password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm  text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 rounded-lg dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-gray-300 px-4 py-1 rounded-md hover:bg-blue-900 transition-colors duration-300 ease-in-out"
          >
            Register
          </button>
          <p className="text-white ">
            already have an account?{' '}
            <Link to="/login" className="text-white underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
