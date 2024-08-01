import axios from "axios";

axios.interceptors.request.use((req) => {
  // Common config
  req.baseURL = import.meta.env.VITE_API_URL;

  // Replace with your actual username and password
  const username = import.meta.env.VITE_API_KEY;
  const password = "";

  // Create a base64 encoded string
  const token = btoa(`${username}:${password}`);

  // set authentication key
  req.headers.Authorization = `Basic ${token}`;

  return req;
});

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    // Handle errors here...

    throw error;
  }
);
