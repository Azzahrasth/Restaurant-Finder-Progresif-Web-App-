/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable quotes */
import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail">
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <img class="restaurant-image lazyload" crossorigin="anonymous" data-src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant-info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant-menu">
    <h3>Menu</h3>
    <div class="menu-section">
      <h4>Foods</h4>
      <div class="menu-grid">
        ${restaurant.menus.foods
          .map((food) => `<div class="menu-item">${food.name}</div>`)
          .join("")}
      </div>
    </div>
    <div class="menu-section">
      <h4>Drinks</h4>
      <div class="menu-grid">
        ${restaurant.menus.drinks
          .map((drink) => `<div class="menu-item">${drink.name}</div>`)
          .join("")}
      </div>
    </div>
  </div>
  <div class="restaurant-reviews">
    <h3>Customer Reviews</h3>
    <div class="review-grid">
      ${restaurant.customerReviews
        .map(
          (review) => `
        <div class="review">
          <h4 class="review-name">${review.name}</h4>
          <p class="review-date">${review.date}</p>
          <p class="review-text">${review.review}</p>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
  <div class="post-reviews">
    <h3>Post Your Review</h3>
      <div>
      <label for="nameInput">Name:</label>
      <input type="text" id="nameInput" aria-label="Name" />
    </div>
    <div>
      <label for="reviewInput">Review:</label>
      <textarea id="reviewInput" aria-label="Review"></textarea>
    </div>
    <button id="submitReviewButton" aria-label="Submit Review">Submit Review</button>
  </div>
</div>


`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" crossorigin="anonymous"  alt="${
        restaurant.name || "-"
      }"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
          restaurant.rating || "-"
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name || "-"
}</a></h2>
      <h4>${restaurant.city || "-"}</h4>
      <p>${restaurant.description || "-"}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
