import React, { useState } from 'react';
import HotelDashboard from './HotelDashboard';
import RoomMangement from './RoomMangement';

function SelectorComponent() {
  const [selectedButton, setSelectedButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  let componentToRender;
  switch (selectedButton) {
  case 'dashboard':
    componentToRender = <HotelDashboard />;
    break;
  case 'rooms':
    componentToRender = <RoomMangement />;
    break;
  default:
    componentToRender = null;
    break;
  }
  return (
    <div className='flex'>
      <div>
        <div className='bg-black h-screen w-64 flex flex-col justify-between'>
          <div className='p-4 mt-32'>
            <ul>
              <li className='text-white hover:bg-gray-800 hover:text-gray-200 py-2 px-4 rounded' onClick={() => handleButtonClick('dashboard')}>Home</li>
              <li
                onClick={() => handleButtonClick('rooms')}
                className='text-white hover:bg-gray-800 hover:text-gray-200 py-2 px-4 rounded'
              >
                Room Management
              </li>
              <li className='text-white hover:bg-gray-800 hover:text-gray-200 py-2 px-4 rounded'>Contact</li>
            </ul>
          </div>
          <div className='p-4'>{/* Additional content, if needed */}</div>
        </div>
      </div>
      <div className='h-screen overflow-auto'>{componentToRender}</div>
    </div>
  );
}

export default SelectorComponent;
