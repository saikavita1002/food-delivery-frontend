import api from './api';

export const getCart = () => api.get('/api/cart');

export const addToCart = (foodId, quantity = 1) =>
    api.post('/api/cart/add', { foodId, quantity });

export const updateCartItem = (foodId, quantity) =>
    api.put('/api/cart/update', { foodId, quantity });

export const removeFromCart = (foodId) =>
    api.delete(`/api/cart/remove/${foodId}`);