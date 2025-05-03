/* eslint-disable */

const hideAlertt = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

const showAlertt = (type, msg) => {
  hideAlert();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideAlert, 5000);
};

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });

    location.reload(true);
  } catch (err) {
    showwAlert('error', 'Error logging out! Try again.');
  }
};

const logOutBtn = document.querySelector('.nav__el--logout');

if (logOutBtn) logOutBtn.addEventListener('click', logout);
