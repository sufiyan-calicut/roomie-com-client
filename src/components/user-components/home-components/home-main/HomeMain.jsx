import React from "react";
import myImage from "/images/bg3.jpg";
import "./HomeMain.css";

function HomeMain() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center h-80vh md:justify-between bg-white cover-div  ">
        <div className="text-center md:text-left mb-10 md:mb-0 ">
          <h1 className="text-4xl   mb-4 welcome-text">
            Welcome to Misty Land!
          </h1>
          <p className="text-lg text-sky-300">
            Thank you for choosing our home stay for your accommodation needs!
            We are delighted to have you as our guest and look forward to
            providing you with a comfortable and memorable stay.
          </p>
        </div>
        <div className="md:w-1/2 coverpic h-auto w-full object-cover ">
          <img
            className="h-auto w-full object-cover coverpic"
            src={myImage}
            alt="placeholder image"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
