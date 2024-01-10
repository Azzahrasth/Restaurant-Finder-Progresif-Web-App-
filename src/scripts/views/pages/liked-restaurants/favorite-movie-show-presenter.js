/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
class FavoriteRestaurantShowPresenter {
  constructor({ view }) {
    this._view = view;

    this._favoriteRestaurantes = favoriteRestaurantes;
    this._favoriteRestaurantes.getAllRestaurantes();
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
