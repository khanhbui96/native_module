import axios from 'axios';
const BASE_URL = 'https://5gdatavip.xyz';
// const BASE_URL = 'https://demo.v2board.com';
export const login = '/api/v1/passport/auth/login';
export const register = '/api/v1/passport/auth/register';
export const getSubscribe = '/api/v1/user/getSubscribe';
export const info = '/api/v1/user/info';
export const notice = '/api/v1/user/notice/fetch';
export const knowledge = 'api/v1/user/knowledge/fetch';
export const plan = 'api/v1/user/plan/fetch';
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Language': 'vi-VN',
  },
});
