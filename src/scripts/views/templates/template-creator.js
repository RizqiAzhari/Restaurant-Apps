import CONFIG from '../../globals/config.js'

const createDetailRestaurantTemplate = (restaurant) =>
  `<img class="photo_detail" crossorigin="anonymous" src="${CONFIG.BASE_URL_PHOTO + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant_info">
    <h3>( ${restaurant.name} )</h3>
    <h3>Informasi</h3>
    <h4>Alamat Lengkap</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>
    <ul>
      ${restaurant.categories.map(
        (category) => `
          <li>${category.name}</li>
        `
      ).join('')}
    </ul>
    <h4>Menu</h4>
    <p class="menu-sub"># Makanan</p>
    ${restaurant.menus.foods.map(
      (food) => `
        <p>${food.name}</p>
      `
    ).join('')}
    <p class="menu-sub"># Minuman</p>
    ${restaurant.menus.drinks.map(
      (drink) => `    
        <p>${drink.name}</p>
      `
    ).join('')}
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant_overview">
    <h4>Customer Review</h4>
    ${restaurant.customerReviews.map(
      (customer) => `    
        <h5>@ ${customer.name}</h5>
        <h6>${customer.date}</h6>
        <p>${customer.review}</p>
      `
    ).join('')}
  </div>
`

const createListRestaurantTemplate = (restaurant) =>
    `<div class="card-item">
        <div class="card-photo">
            <h4>${restaurant.city}</h4>
            <img crossorigin="anonymous" class="lazyload" src="${CONFIG.BASE_URL_PHOTO + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-content">
            <h5 class="restaurant-name">${restaurant.name}</h5>
            <h6>Rating : ${restaurant.rating}</h6>
            <p>${restaurant.description}</p>
            <p class="read-more"><a href='/#/detail/${restaurant.id}'>Read More</a></p>
        </div>
    </div>`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createDetailRestaurantTemplate,
  createListRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
