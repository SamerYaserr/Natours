/* eslint-disable */
import '@babel/polyfill';
import axios from 'axios';

import { showAlert } from './alert';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    showAlert('success', 'Signed up successfully!');
    window.setTimeout(() => {
      location.assign('/');
    }, 500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
