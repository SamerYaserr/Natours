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

const updateData = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });

    showAlerttt('success', 'Data updated successfully!');
    window.setTimeout(() => {
      location.assign('/me');
    }, 500);
  } catch (err) {
    showAlerttt('error', err.response.data.message);
  }
};

const updateDataForm = document.querySelector('.form-user-data');

if (updateDataForm) {
  updateDataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log(email);
    updateData(name, email);
  });
}
