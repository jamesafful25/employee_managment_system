// src/api/dashboardAPI.js
import axiosInstance from './axiosInstance';

export const getDashboardData = () => axiosInstance.get('/dashboard');