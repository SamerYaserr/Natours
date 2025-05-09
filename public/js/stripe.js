/* eslint-disable */

const stripe = Stripe(
  'pk_test_51RMuUdBX4QjKpZ0H9o4OCGKRwc2OsTOr7QFE3aNXNqjS5YN1kehhYqCFKj9mDNaEKBQBFem8DJiEBCsdeyMWx2Jd00b5Z3BgzX',
);

const hideeAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

const showwAlert = (type, msg) => {
  hideeAlert();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideeAlert, 5000);
};

const bookTour = async (tourId) => {
  try {
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    });

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showwAlert('Error', err);
  }
};

const bookBtn = document.getElementById('book-tour');

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const tourId = e.target.dataset.tourId;
    bookTour(tourId);
  });
}
