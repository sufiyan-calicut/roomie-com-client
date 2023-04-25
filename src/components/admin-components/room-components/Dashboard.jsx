import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminApi } from '../../../api/adminApi';
import { toast } from 'react-hot-toast';

function Dashboard() {
  const navigate = useNavigate();
  const [newHotels, setNewHotels] = useState([]);
  const [popup, setPopup] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    adminApi.get('/new-hotel-requests').then((response) => {
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
          await adminApi.post('/decline-hotel-request', { hotelID }).then((response) => {
            setNewHotels(response.data.newHotels);
            toast.success(response.data.message);
          });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };

      toast.loading((t) => (
        <div className='flex flex-col text-center justify-center'>
          <p className='text-red-700 m-2 font-sans font-semibold'>Are you sure you want decline this request ?</p>

          <div className=' flex justify-end  gap-4'>
            <button
              className='text-red-900 font-sans hover:underline font-normal'
              onClick={() => {
                setShowToast(false);

                toast.dismiss(t.id);
              }}
            >
              No
            </button>
            <button
              className='text-blue-900 font-sans hover:underline font-normal'
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
          await adminApi.post('/accept-hotel-request', { hotelID }).then((response) => {
            setNewHotels(response.data.newHotels);
            toast.success(response.data.message);
          });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };

      toast.loading((t) => (
        <div className='flex flex-col text-center justify-center'>
          <p className='text-green-700 m-2 font-sans font-semibold'>Are you sure you want accept this request ?</p>

          <div className=' flex justify-end  gap-4'>
            <button
              className='text-red-900 font-sans hover:underline font-normal'
              onClick={() => {
                setShowToast(false);

                toast.dismiss(t.id);
              }}
            >
              No
            </button>
            <button
              className='text-blue-900 font-sans hover:underline font-normal'
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
    <div className='w-full flex flex-col h-auto   text-black'>
      <div className='w-fit h-fit flex flex-row flex-wrap '>
        <div className='bg-white font-semibold w-fit border  text-black px-10 py-4 m-10 rounded-md shadow-md hover:shadow-lg hover:border-green-900 hover:bg-gray-50 hover:text-gray-700 duration-700'>
          .<h1>Active Hotels</h1>
          <h4>15</h4>
          <h4>lorem</h4>
          <p className='text-right'>{/* <i className="ri-eye-line"></i> */}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
