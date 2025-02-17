import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7004/api", // URL do backend
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptador para lidar com erros
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na requisição:", error);
        return Promise.reject(error);
    }
);

export default api;
