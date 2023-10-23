import axios from 'axios';


export const userApi = axios.create({
  // baseURL: 'http://localhost:4000/api/user',
<<<<<<< HEAD
  baseURL: 'https://roomie-server.onrender.com/api/user',
=======
    baseURL: 'https://roomie-server.onrender.com/api/user',

>>>>>>> 4575f756b115bc0d307b2aa0a01f326d44d12f63
});
userApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
