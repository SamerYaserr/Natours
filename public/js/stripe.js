/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51RMuUdBX4QjKpZ0H9o4OCGKRwc2OsTOr7QFE3aNXNqjS5YN1kehhYqCFKj9mDNaEKBQBFem8DJiEBCsdeyMWx2Jd00b5Z3BgzX',
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('Error', err);
  }
};
