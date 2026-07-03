import api from './api';

export const getFoods = (restaurantId) =>
  api.get('/api/foods', {
    params: restaurantId ? { restaurantId } : {},
  });

export const searchFoods = (query) =>
  api.get('/api/foods/search', {
    params: { q: query },
  });

export const getFoodById = (id) =>
  api.get(`/api/foods/${id}`);

export const addFood = (formData) =>
  api.post('/api/foods', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateFood = (id, formData) =>
  api.put(`/api/foods/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteFood = (id) =>
  api.delete(`/api/foods/${id}`);