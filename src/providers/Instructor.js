// src/apiInstructor.js
import axios from 'axios';

const apiInstructor = axios.create({
  baseURL: 'http://localhost:5500/api', // Ensure this matches your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Optional: Add token automatically if present
apiInstructor.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiInstructor;
