import request from '../util/request';

export const getMenu = (data) =>
  request('/api/dashboard/get-my-dashboards', { method: 'post', data });
export const dashboard = (data) =>
  request('/api/dashboard/get-dashboard-detail', { method: 'post', data });
export const getLine = (data) =>
  request('/api/dashboard/get-chart-detail', { method: 'post', data });
export const getPie = (data) =>
  request('/api/dashboard/get-chart-data', { method: 'post', data });