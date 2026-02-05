import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL // IMPORTANTE: aquí irá la URL que entregue Render, Netlify, etc. al desplegar el proyecto.
});

export default axiosClient;