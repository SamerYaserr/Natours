/* eslint-disable */

const hideAlerttt = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

const showAlerttt = (type, msg) => {
  hideAlerttt();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideAlerttt, 5000);
};

const updateSettings = async (data, type) => {
  const url =
    type === 'data'
      ? 'http://127.0.0.1:3000/api/v1/users/updateMe'
      : 'http://127.0.0.1:3000/api/v1/users/updatePassword';

  try {
    console.log(url);
    console.log(data);
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    showAlerttt('success', `${type.toUpperCase()} updated successfully!`);
    window.setTimeout(() => {
      location.assign('/me');
    }, 500);
  } catch (err) {
    showAlerttt('error', err.response.data.message);
  }
};

const updateDataForm = document.querySelector('.form-user-data');
const updatePasswordForm = document.querySelector('.form-user-password');

if (updateDataForm) {
  updateDataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });
}

if (updatePasswordForm) {
  updatePasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const currentPassword = document.getElementById('password-current').value;
    const newPassword = document.getElementById('password').value;
    const newPasswordConfirm =
      document.getElementById('password-confirm').value;

    await updateSettings(
      { currentPassword, newPassword, newPasswordConfirm },
      'password',
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}
