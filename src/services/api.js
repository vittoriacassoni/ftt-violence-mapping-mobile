import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.73:3000',
});

// api.interceptors.request.use(async (config) => {
//   const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTYzNzYwODk3Nn0.DqgGZJ_MNsbbhd3Nn2VU59Uy3JQkMDz-CS0-8S82ArQ';
//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
