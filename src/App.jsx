import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/user-components/register-and-login/Login";
import OtpPage from "./components/user-components/register-and-login/otp";
import Home from "./pages/user-pages/home-page/Home";
import RegisterPage from "./pages/user-pages/register-page/RegisterPage";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import AdminSignIn from "./pages/admin-pages/AdminSignIn";
import AdminHome from "./pages/admin-pages/AdminHome";
import UsersList from "./pages/admin-pages/UsersList copy";
import AdminAuth from "./components/admin-components/AdminAuth";
import ForgetPasswordForm from "./components/user-components/register-and-login/ForgetPasswordForm";
import OtpReset from "./components/user-components/register-and-login/OtpReset";
import ResetPasswordForm from "./components/user-components/register-and-login/ResetPasswordForm";
import DisplayRoomsPage from "./pages/user-pages/rooms/DisplayRoomsPage";
import AddRoom from "./components/admin-components/room-components/AddRoom";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  useEffect(() => {
    window.addEventListener("beforeunload", removeTokenFromLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", removeTokenFromLocalStorage);
    };
  }, []);

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("adminToken");
  };
  return (
    <Router>
      {loading && (
        <div className="spinner-parent">
          <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent shadow-md "></div>
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="/otp-reset" element={<OtpReset />} />
        <Route path="/set-new-password" element={<ResetPasswordForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/display-rooms" element={<DisplayRoomsPage />} />
        </Route>

        <Route path="/admin" element={<AdminSignIn />} />
        <Route element={<AdminAuth />}>
          <Route path="/admin/dashboard" element={<AdminHome />} />
          <Route path="/admin/userslist" element={<UsersList />} />
          <Route path="/admin/add-room" element={<AddRoom />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="/register" element={<Register />} /> */
}
{
  /* <Route path="/profile" element={<Profile />} /> */
}
