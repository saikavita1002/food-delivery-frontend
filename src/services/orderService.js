import api from './api';

    api.post('/api/orders', { deliveryAddress });

export const getUserOrders = (userId) =>
    api.get(`/api/orders/user/${userId}`);

export const getRestaurantOrders = (restaurantId) =>
    api.get(`/api/orders/restaurant/${restaurantId}`);

export const getOrderById = (id) =>
    api.get(`/api/orders/${id}`);

export const updateOrderStatus = (id, status) =>
    api.put(`/api/orders/status/${id}`, { status });