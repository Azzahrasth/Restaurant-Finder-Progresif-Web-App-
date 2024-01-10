/* eslint-disable no-console */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async ListRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(id, name, review) {
    try {
      const data = { id, name, review };

      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.error === false) {
          alert('Ulasan berhasil ditambahkan.');
          console.log('Review added successfully');
          console.log('Customer Reviews:', result.customerReviews);
        } else {
          alert('Ulasan gagal ditambahkan.');
          console.error('Error:', result.message);
        }
      } else {
        console.error('Failed to make the POST request');
      }
    } catch (error) {
      alert('Ulasan gagal ditambahkan.');
      console.error('An error occurred:', error);
    }
  }
}

export default RestaurantDbSource;
