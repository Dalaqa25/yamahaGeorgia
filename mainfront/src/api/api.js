import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://yamahageorgia-backend.onrender.com';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Products API methods
export const productsApi = {
    getAll: () => api.get('/api/products'),
    getById: (id) => api.get(`/api/products/${id}`),
    create: (data) => api.post('/api/products', data),
    update: (id, data) => api.put(`/api/products/${id}`, data),
    delete: (id) => api.delete(`/api/products/${id}`)
};

// Accessories API methods
export const accessoriesApi = {
    getAll: () => api.get('/api/accessories'),
    getById: (id) => api.get(`/api/accessories/${id}`),
    create: (data) => api.post('/api/accessories', data),
    update: (id, data) => api.put(`/api/accessories/${id}`, data),
    delete: (id) => api.delete(`/api/accessories/${id}`)
};

export default api; 