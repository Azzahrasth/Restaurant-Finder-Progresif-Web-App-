/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { createRestaurantItemTemplate } from "../../templates/template-creator";

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <div class="content">
      <input  id="query" type="text" hidden="true">
      <h2 class="content__heading">Your Liked restaurant</h2>
 
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        ""
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById("restaurants").innerHTML = html;
    document
      .getElementById("restaurants")
      .dispatchEvent(new Event("restaurants:updated"));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}
export default FavoriteRestaurantView;
