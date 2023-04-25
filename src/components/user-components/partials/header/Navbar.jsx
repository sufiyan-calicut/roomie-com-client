import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './Navbar.css';
import MyCalendar from './Calender';
import { useSelector } from 'react-redux';
import RoomSelection from './RoomSelection';

const Navbar = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openRoomDiv, setOpenRoomDiv] = useState(false);

  const search = useSelector((state) => state.search);
  console.log(search.checkInDate, 'checkindateeeee');
  console.log(search, 'search date');
  const value = new Date();
  const date = new Date();

  const day =
    date.toLocaleString('default', { weekday: 'long' }) +
    ' ' +
    date.getDate() +
    ' ' +
    date.toLocaleString('default', { month: 'long' });

  console.log(value, 'date');

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log(showMenu, '1');
    setShowMenu(showMenu ? false : true);
    console.log(showMenu, '2');
  };

  const handleRoomDiv = (e) => {
    e.stopPropagation();
    console.log(openRoomDiv);
    setOpenRoomDiv(!openRoomDiv);
    console.log(openRoomDiv);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo '>
        <h1 className='font-bold cursor-default'>MISTY LAND</h1>
      </div>
      <div className='navbar-links cursor-default  '>
        <div className='border  md:h-9 md:w-48 '>
          <input placeholder='Search by city, hotel, or neighborhood' type='text' />
        </div>
        <div className='border  md:h-9 md:w-48 p-2'>
          <div
            className='flex absolute w-44'
            onClick={() => setOpenCalendar(true)}
            onMouseLeave={() => setOpenCalendar(false)}
            placeholder={new Date()}
          >
            {day}
            {openCalendar && <MyCalendar />}
          </div>
        </div>
        <div className=' md:h-9 md:w-48 border px-2 py-1 border-gray-400' onClick={handleRoomDiv} >
          
          {
            openRoomDiv &&
            <RoomSelection />
          }
           
          
        </div>
      </div>
      <div className='navbar-icons'>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />
        {showMenu && (
          <div className='navbar-menu'>
            <a className='dropdown-links' onClick={() => navigate('/')}>
              Home
            </a>
            <a onClick={() => navigate('/about')} className='dropdown-links'>
              About
            </a>
            <a onClick={() => navigate('/contact')} className='dropdown-links'>
              Contact
            </a>
            <a
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}
            >
              Logout
            </a>
            <a
              onClick={() => {
                navigate('/register');
              }}
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
