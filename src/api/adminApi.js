import axios from 'axios';

export const adminApi = axios.create({
  baseURL: 'https://roomie-server.onrender.com/api/admin',
});
adminApi.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
