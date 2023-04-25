import React, { useEffect, useState } from 'react';

function RoomSelection() {
  console.log('helllo my');
  const [roomCount, setRoomCount] = useState(1);
  const [guestCounts, setGuestCounts] = useState([1]);

  const handleAddRoom = (e) => {
    e.stopPropagation();

    setRoomCount(roomCount + 1);
    setGuestCounts([...guestCounts, 1]);
  };

  const handleDeleteRoom = (e) => {
    e.stopPropagation();
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
      setGuestCounts(guestCounts.slice(0, -1));
    }
  };

  const handleAddGuest = (index) => {
    const newGuestCounts = [...guestCounts];
    newGuestCounts[index] += 1;
    setGuestCounts(newGuestCounts);
  };

  const handleRemoveGuest = (index) => {
    const newGuestCounts = [...guestCounts];
    if (newGuestCounts[index] > 1) {
      newGuestCounts[index] -= 1;
      setGuestCounts(newGuestCounts);
    }
  };

  const rooms = [];
  for (let i = 0; i < roomCount; i++) {
    rooms.push(
      <div key={i} className='flex items-center p-2 border-b h-16 gap-4 font-semibold text-gray-600'>
        <div className='w-2/4'>
          <h2 className='font-sans'>Room{i + 1}</h2>
        </div>

        <div className='flex items-center font-semibold text-sm text-gray-600'>
          <button
            type='button'
            className='bg-white w-8 h-8 border-2 hover:shadow-xl hover:border-3 hover:duration-300 mx-4 flex items-center justify-center'
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveGuest(i);
            }}
          >
            <i className='ri-subtract-line'></i>
          </button>
          <h3>{guestCounts[i]}</h3>
          <button
            type='button'
            className='bg-white w-8 h-8 border-2 hover:shadow-xl hover:border-3 hover:duration-300 mx-4 flex items-center justify-center'
            onClick={(e) => {
              e.stopPropagation();
              handleAddGuest(i);
            }}
          >
            <i className='ri-add-line'></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='absolute bg-white border shadow-lg rounded-md w-64 h-auto mt-10 z-10'>
      <div className='flex justify-between items-center border-b p-2 font-semibold text-md text-gray-600'>
        <h3>Rooms</h3>
        <h3>Guests</h3>
      </div>

      {rooms}
      <div className='flex items-center px-2 h-14 gap-4 font-sm text-sm text-gray-600'>
        <div className={'hover:text-red-700 w-2/4 '} onClick={handleDeleteRoom}>
          Delete Room
        </div>
        <div className={'hover:text-blue-700 w-2/4'} onClick={handleAddRoom}>
          Add Room
        </div>
      </div>
    </div>
  );
}

export default RoomSelection;
