import React, { useState } from "react";

function RoomSelection() {

  return(
    <div className="absolute bg-white border  shadow-lg rounded-md w-64 h-auto mt-10">
      <div className="flex justify-around border-b p-2 font-semibold text-lg text-gray-600">
         <h1>Rooms</h1>
         <h1>Guests</h1>
      </div>
      <div className="flex p-2  border-b h-16 gap-4 font-semibold  text-gray-600">
        <div className="flex items-center w-2/4">
          <h2 className="font-sans">Room1</h2>
        </div>
        <div className="flex items-center  font-semibold text-sm text-gray-600">
        <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-subtract-line"></i>
                </button>
          <h3>1</h3>
          <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-add-line"></i>
                </button>
        </div>
       
      </div>
      <div className="flex p-2  border-b h-16 gap-4 font-semibold  text-gray-600">
        <div className="flex items-center w-2/4">
          <h2 className="font-sans">Room1</h2>
        </div>
        <div className="flex items-center  font-semibold text-sm text-gray-600">
        <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-subtract-line"></i>
                </button>
          <h3>1</h3>
          <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-add-line"></i>
                </button>
        </div>
       
      </div>      <div className="flex p-2  border-b h-16 gap-4 font-semibold  text-gray-600">
        <div className="flex items-center w-2/4">
          <h2 className="font-sans">Room1</h2>
        </div>
        <div className="flex items-center  font-semibold text-sm text-gray-600">
        <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-subtract-line"></i>
                </button>
          <h3>1</h3>
          <button
                  type="button"
                 
                  className="bg-white  w-8 h-8 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center"
                >
                  <i className="ri-add-line"></i>
                </button>
        </div>
       
      </div>
      <div className="flex items-center  px-2  h-14 gap-4 font-sm text-sm  text-gray-600">
        <div className="hover:text-red-700  w-2/4">
          Delete Room
        </div>
        <div className="hover:text-blue-700  w-2/4">
          Add Room
        </div>
      </div>
      

    </div>
  )
 
}
export default RoomSelection;
