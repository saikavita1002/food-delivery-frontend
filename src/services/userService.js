import api from './api';

export const registerUser = (data) => api.post('api/users/register', data);
export const loginUser = (data) => api.post('api/users/login', data);
export const getProfile = () => api.get('api/users/profile');
export const updateProfile = (data) => api.put('api/users/profile', data);
export const changePassword = (data) => api.put('api/users/change-password', data);
