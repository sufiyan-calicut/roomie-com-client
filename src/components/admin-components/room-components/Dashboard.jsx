import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminApi } from "../../../api/adminApi";
import { toast } from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();
  const [newHotels, setNewHotels] = useState([]);
  const [popup, setPopup] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    adminApi.get("/new-hotel-requests").then((response) => {
      setNewHotels([...response.data]);
    });
  }, []);

  const handleClick = (hotelid) => {
    const hotelData = newHotels.filter((htl) => {
      return htl._id == hotelid;
    });
    const data = hotelData[0];
    setHotel(data);
    setPopup(true);
  };

  const DeclineRequest = () => {
    if (!showToast) {
      setShowToast(true);

      const confirmDecline = async (hotelID) => {
        try {
          await adminApi
            .post("/decline-hotel-request", { hotelID })
            .then((response) => {
              setNewHotels(response.data.newHotels);
              toast.success(response.data.message);
            });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };

      toast.loading((t) => (
        <div className="flex flex-col text-center justify-center">
          <p className="text-red-700 m-2 font-sans font-semibold">
            Are you sure you want decline this request ?
          </p>

          <div className=" flex justify-end  gap-4">
            <button
              className="text-red-900 font-sans hover:underline font-normal"
              onClick={() => {
                setShowToast(false);

                toast.dismiss(t.id);
              }}
            >
              No
            </button>
            <button
              className="text-blue-900 font-sans hover:underline font-normal"
              onClick={() => {
                toast.dismiss(t.id);
                setShowToast(false);
                setPopup(false);
                confirmDecline(hotel._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      ));
    }
  };

  const handleAccept = async () => {
    if (!showToast) {
      setShowToast(true);

      const confirmAccept = async (hotelID) => {
        try {
          await adminApi
            .post("/accept-hotel-request", { hotelID })
            .then((response) => {
              setNewHotels(response.data.newHotels);
              toast.success(response.data.message);
            });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };

      toast.loading((t) => (
        <div className="flex flex-col text-center justify-center">
          <p className="text-green-700 m-2 font-sans font-semibold">
            Are you sure you want accept this request ?
          </p>

          <div className=" flex justify-end  gap-4">
            <button
              className="text-red-900 font-sans hover:underline font-normal"
              onClick={() => {
                setShowToast(false);

                toast.dismiss(t.id);
              }}
            >
              No
            </button>
            <button
              className="text-blue-900 font-sans hover:underline font-normal"
              onClick={() => {
                toast.dismiss(t.id);
                setShowToast(false);
                setPopup(false);
                confirmAccept(hotel._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="w-full flex flex-col h-auto   text-black">
      <div className="w-fit h-fit flex flex-row flex-wrap ">
        {newHotels?.map((hotel) => (
          <div
            key={hotel?._id}
            onClick={() => handleClick(hotel?._id)}
            className="bg-white font-semibold w-fit border  text-black px-10 py-4 m-10 rounded-md shadow-md hover:shadow-lg hover:border-green-900 hover:bg-gray-50 hover:text-gray-700 duration-700"
          >
            .<h1>Hotel Name: {hotel.hotelName}</h1>
            <h4>State : {hotel.state}</h4>
            <h4>City : {hotel.city}</h4>
            <p className="text-right">
              <i className="ri-eye-line"></i>
            </p>
          </div>
        ))}
      </div>
      {popup && (
        <div className="bg-gray-800 w-screen h-auto fixed inset-0  bg-opacity-50  flex justify-center z-50 ">
          <div className=" font-bold center-div overflow-y-scroll max-h-screen bg-white  rounded-lg p-8 max-w-2xl mx-4 h-fit">
            <div className="flex flex-col sm:flex-row justify-between mb-8">
              <h2 className="text-2xl font-bold mb-2 sm:mb-0">
                {hotel?.hotelName}
              </h2>
              <p className="text-gray-600">{hotel?.status}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {hotel?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-600">Email: {hotel?.email}</p>
              <p className="text-gray-600">Phone: {hotel?.phoneNumber}</p>
              <p className="text-gray-600">
                {hotel?.place}, {hotel?.city}, {hotel?.state} - {hotel?.pincode}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Amenities</h3>
              <ul className="list-disc list-inside">
                {hotel?.amnities?.map((amenity) => (
                  <li key={amenity} className="text-gray-600">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Rooms and Pool</h3>
              <p className="text-gray-600">Number of Rooms: {hotel?.rooms}</p>
              <p className="text-gray-600">Number of Pools: {hotel?.pool}</p>
              <p className="text-gray-600">
                Number of Allowed Guests: {hotel?.allowedGuests}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Rules</h3>
              <ul className="list-disc list-inside">
                {hotel?.rules?.map((rule) => (
                  <li key={rule} className="text-gray-600">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Description</h3>
              <p className="text-gray-600">{hotel?.description}</p>
            </div>
            <div className=" flex bg-gray-100 justify-end gap-6 h-20 py-2 px-4 m-4">
              <button
                className="text-green-900 hover:underline"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="text-red-900 hover:underline"
                onClick={DeclineRequest}
              >
                Decline
              </button>
              <button
                className="text-blue-900 hover:underline"
                onClick={() => setPopup(false)}
              >
                Remind me later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

export default Dashboard