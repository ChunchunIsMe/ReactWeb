import request from '../util/request';

export const getMenu = (data) =>
  request('/api/dashboard/get-my-dashboards', { method: 'post', data });