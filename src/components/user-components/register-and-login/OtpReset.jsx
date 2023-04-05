import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

// otp page for verify otp on the context of forgot password

function OtpReset() {
  const navigate = useNavigate();
  const [userOtp, setUserOtp] = useState();
  const [showResend, setShowResend] = useState(false);
  const [countdown, setCountdown] = useState(30);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      setShowResend(true);
    }

    return () => clearTimeout(timer);
  }, [countdown]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userOtp) {
        return toast.error("please enter otp");
      }
      const response = await api.post(`/user/verify-reset-otp`, { userOtp });
      if (response.data.success) {
        toast.success(response.data.message);

        navigate("/set-new-password");
      } else {
        return toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center ">
      <div className="flex bg-white items-center justify-center flex-col h-96 w-80  rounded-lg shadow-lg font-thin">
        <h1 className="m-6 font-medium">OTP</h1>
        <form className="p-6 " onSubmit={handleSubmit}>
          <label className="block mb-3 font-">Enter OTP </label>
          <input
            className="block mb-3 font-thin "
            type="number"
            placeholder="enter your secret code:"
            onChange={(e) => setUserOtp(e.target.value)}
          />
          <button className="text-white bg-gray-500   py-1 px-2 rounded-md  hover:text-white hover:border-gray-500 hover:bg-gray-700 transition duration-500">
            submit
          </button>
        </form>
        {showResend ? (
          <button
            className="text-red-500 hover:underline hover:text-red-600"
            onClick={handleResendOtp}
          >
            resend otp
          </button>
        ) : (
          <p>
            resend otp in{" "}
            <span className="text-blue-700 font-normal">{countdown}</span>{" "}
            seconds
          </p>
        )}
      </div>
    </div>
  );
}

export default OtpReset;
