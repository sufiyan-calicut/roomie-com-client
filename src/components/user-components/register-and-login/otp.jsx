import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../api/axios";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const [showResend, setShowResend] = useState(false);
  const [countdown, setCountdown] = useState(30);
  let userOtp = { otp };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      setShowResend(true);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = async () => {
    try {
      const response = await api.post(`/user/resendOtp`);
      if (response.data.success) {
        toast.success(response.data.message);

        // code to resend OTP
        setShowResend(false);
        setCountdown(60);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("unable to send otp ");
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post(`/user/verifyOtp`, userOtp);

    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/login");
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="  flex items-center justify-center form-main-login">
      <div className="flex flex-col justify-center items-center shadow-md  form-login">
        <form onSubmit={handleSubmit} className="w-72  max-w-sm">
          <h2 className="text-lg font-medium mb-6 text-purple-400 font-serif ">
            Enter your otp
          </h2>

          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-gray-300 font-medium mb-1 text-sm"
            >
              otp:
            </label>
            <input
              style={{
                WebkitAppearance: "none",
                margin: 0,
              }}
              type="number"
              value={otp}
              onChange={handleOtpChange}
              required
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-400 dark:highlight-white/5 dark:hover:bg-slate-900"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-gray-300 px-4 py-1 rounded-md hover:bg-blue-900 transition-colors duration-300 ease-in-out"
          >
            submit
          </button>
          <div>
            {showResend ? (
              <button className="text-white" onClick={handleResendOtp}>
                Resend OTP
              </button>
            ) : (
              <p className="text-white">Resend OTP in {countdown} seconds</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
