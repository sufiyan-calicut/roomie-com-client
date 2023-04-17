import React from "react";
import Navbar from "../partials/header/Navbar";
import img1 from "../../../../public/images/pexels-photo-1179156.jpeg";
import Footer from "../partials/footer/Footer";

function SingleRoom() {
  return (
    <div className="main div w-full h-screen ">
      <Navbar />
      <div className="first-dive-images flex flex-col md:flex-row   gap-6   p-8  m-4 h-3/4 ">
        <div className="largeImage md:w-3/4 h-3/4 md:h-full  rounded-lg ">
          <img
            src={img1}
            alt="Large Image"
            className="h-full w-full border rounded-lg"
          />
        </div>

        <div className="imageOptions flex flex-row  md:flex-col gap-2  md:w-1/4 h-1/4 md:h-full  rounded-lg ">
          <div className="optionOne w-1/3 md:w-full md:h-1/3 rounded-lg">
            <img
              src={img1}
              alt="Large Image"
              className="h-full   rounded-lg w-full"
            />
          </div>
          <div className="optionTwo w-1/3 md:w-full md:h-1/3 rounded-lg">
            <img
              src={img1}
              alt="Large Image"
              className="h-full   rounded-lg w-full"
            />
          </div>
          <div className="optionThree  w-1/3 md:w-full md:h-1/3 rounded-lg">
            <img
              src={img1}
              alt="Large Image"
              className="h-full w-full   rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="center-div   flex flex-col md:flex-row  gap-6  p-4  m-4    ">
        
        <div className="largeImage  md:w-3/4 h-3/4 md:h-full  rounded-lg  ">
          <div className="border leading-loose mb-4 rounded-lg h-72 p-2 ">
            <h1 className="text-3xl font-bold border-b border-gray-400   w-fit text-blue-900">
              MISTY VILLA
            </h1>
            <p className="text-gray-400">
              Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
              accommodation, an outdoor swimming pool, a bar, a shared lounge, a
              garden and barbecue facilities. Complimentary WiFi is provided.
              There is a private bathroom with bidet in all units, along with a
              hairdryer and free toiletries. The Symphony 9 Tam Coc offers a
              terrace. Both a bicycle rental service and a car rental service
              are available at the accommodation, while cycling can be enjoyed
              nearby.{" "}
            </p>
            <div className="flex   justify-around m-4  text-gray-600 justify-items-end">
              <div className="flex">

                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>

              <div className="flex">

                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>

              <div className="flex">

                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>

              <div className="flex">

                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>
              </div>
          </div>
          <div className="border rounded-lg h-1/2 p-2 leading-10 ">
            <h1 className="text-xl font-bold border-b  w-fit text-gray-900">
              Amnities
            </h1>
            <div className="grid gap-4 m-6 grid-cols-4 items-center justify-around text-gray-500">
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>nof</p>
              </div>{" "}
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>wifi</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>Laundry</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>Dryer</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>kitchen</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>Locker</p>
              </div>
            </div>
          </div>
        </div>
        <div className="booking   sticky top-0 tracking-wider p-6 flex flex-row bg-sky md:flex-col  shadow-lg shadow-slate-300 md:w-/4 h-1/4 bg-black md:h-screen border rounded-3xl border-gray-100 ">
          <div className="sticky top-0">
            
          <div className=" flex flex-row justify-between m-4">
            <h1 className="text-xl text-blue-900 ">
              $2999<span className="text-gray-400 font-thin">/day </span>
            </h1>
            <h4 className="">
              * 4.5 <span className="font-thin text-gray-600">(453)</span>
            </h4>
          </div>
          <div className="flex flex-col  h-40 border gap-3 rounded-lg">
            <div className=" p-2 flex flex-row gap-2  justify-around">
              <div>
                <h2>Check IN</h2> <input type="date" />
              </div>
              <div>
                {" "}
                <h2>Check Out</h2>
                <input type="date" />
              </div>
            </div>
            <div className=" flex items-center   gap-4 mx-10 mt-4 ">
              <h1 className="font-sans font-semibold text-gray-500 text-lg">
                Guests
              </h1>
              <button className="hover:shadow-lg w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white d/ark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                <i class="ri-add-fill"></i>
              </button>
              <h4>4</h4>
              <button className="hover:shadow-lg  w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white d/ark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                <i class="ri-subtract-fill"></i>
              </button>
            </div>
          </div>
          <div className="bg-blac p-4 flex justify-center "><button className="bg-blue-900 shadow-transparent-xl hover:bg-slate-900 duration-300 text-gray-300 w-2/4 p-2 rounded-xl border font-sans tracking-widest font-medium">RESERVE</button></div>
       
       </div> </div>
        
      </div>
      <div className="w-3/4 h-auto  p-8  ">
      <div className="border  w- gap-2 rounded-lg h-1/2 p-2 leading-10 ">
            <h1 className="text-xl font-bold border-b  w-fit text-gray-900">
              Rules for guests
            </h1>
            <div className="flex flex-col gap-4 m-6  text-gray-500">
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>{" "}
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>
              <div className="flex gap-2">
                <i class="ri-lock-password-line"></i>
                <p>No smoking inside property</p>
              </div>
     
            </div>
            
          </div>
      </div>
      <Footer />

    </div>
  );
}

export default SingleRoom;
