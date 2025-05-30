/* eslint-disable */
import '@babel/polyfill';
import axios from 'axios';

import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    showAlert('success', 'Logged in successfully!');
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status === 'success') {
      const currentPath = new URL(window.location.href).pathname;

      if (currentPath === '/me') location.assign('/');
      else if (currentPath === '/my-tours') location.assign('/');
      else location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Please try again.');
  }
};
