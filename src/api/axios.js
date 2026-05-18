import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://your-backend-url.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
