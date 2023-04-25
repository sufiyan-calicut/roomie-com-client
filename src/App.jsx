import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/user-components/register-and-login/Login';
import OtpPage from './components/user-components/register-and-login/otp';
import Home from './pages/user-pages/home-page/Home';
import RegisterPage from './pages/user-pages/register-page/RegisterPage';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import AdminSignIn from './pages/admin-pages/AdminSignIn';
import AdminHome from './pages/admin-pages/AdminHome';
import UsersList from './pages/admin-pages/UsersList copy';
import AdminAuth from './components/admin-components/AdminAuth';
import ForgetPasswordForm from './components/user-components/register-and-login/ForgetPasswordForm';
import OtpReset from './components/user-components/register-and-login/OtpReset';
import ResetPasswordForm from './components/user-components/register-and-login/ResetPasswordForm';
import DisplayRoomsPage from './pages/user-pages/rooms/DisplayRoomsPage';
import AddRoom from './components/admin-components/room-components/AddRoom';
import SingleRoom from './components/user-components/Rooms/SingleRoom';
import HotelSignIn from './components/hotel-components/HotelSignIn';
import HotelRegistrationForm from './components/hotel-components/HotelRegistrationForm';
import HotelManagement from './pages/admin-pages/HotelManagement';
import SingleRequests from './components/admin-components/room-components/SingleRequests';
import CongratsMessage from './components/hotel-components/CongratsMessage';
import HotelDashboard from './components/hotel-components/HotelDashboard';
import SelectorComponent from './components/hotel-components/SelectorComponent';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  //   window.addEventListener("beforeunload", removeTokenFromLocalStorage);

  //   return () => {
  //     window.removeEventListener("beforeunload", removeTokenFromLocalStorage);
  //   };
  // }, []);

  // const removeTokenFromLocalStorage = () => {
  //   localStorage.removeItem("adminToken");
  // };
  return (
    <Router>
      {loading && (
        <div className='spinner-parent'>
          <div className='w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent shadow-md '></div>
        </div>
      )}

      <Toaster position='top-center' reverseOrder={false} />

      <Routes>
        <Route path='/single-room-details' element={<SingleRoom />} />
        <Route path='/otp' element={<OtpPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPasswordForm />} />
        <Route path='/otp-reset' element={<OtpReset />} />
        <Route path='/set-new-password' element={<ResetPasswordForm />} />
        <Route element={<PrivateRoute />}>
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/display-rooms' element={<DisplayRoomsPage />} />

        <Route path='/admin' element={<AdminSignIn />} />
        <Route path='/admin/hotel-management' element={<HotelManagement />} />
        <Route path='/admin/single-request' element={<SingleRequests />} />
        <Route element={<AdminAuth />}></Route>
        <Route path='/admin/dashboard' element={<AdminHome />} />
        <Route path='/admin/userslist' element={<UsersList />} />
        <Route path='/admin/add-room' element={<AddRoom />} />

        <Route path='/hotel' element={<HotelSignIn />} />
        <Route path='/hotel-register-form' element={<HotelRegistrationForm />} />
        <Route path='/hotel/hotel-dashboard' element={<SelectorComponent />} />
        <Route path='/hotel/greatings' element={<CongratsMessage />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="/register" element={<Register />} /> */
}
{
  /* <Route path="/profile" element={<Profile />} /> */
}
