import CONFIG from '../../globals/config.js'

const createDetailRestaurantTemplate = (restaurant) => `
  <h3>${restaurant.name}</h3>
  <img src="${CONFIG.BASE_IMAGE_URL + '/' + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant_info">
    <h3>Informasi</h3>
    <h4>Alamat Lengkap</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>
    <ul>` +
    restaurant.categories.foreach((category) => {
      return `<li>${category.name}</li>`
    }) +
    `</ul>
    <h4>Menu</h4>
    <table>
        <tr>
            <th>Makanan</th>
            <th>Minuman</th>
        </tr>
        <tr>` +
    restaurant.menus.foreach((menu) => {
      menu.foods.foreach((food) => {
        return `<td>${food.name}</td>`
      })
      menu.drinks.foreach((drink) => {
        return `<td>${drink.name}</td>`
      })
    }) +
    `   </tr>
    </table>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant_overview">
    <h4>Customer Review</h4>` +
    restaurant.customerReviews.foreach((customer) => {
      return `<h5>@ ${customer.name}</h5>
              <h6>${customer.date}</h6>
              <p>${customer.review}</p>`
    }) +
  `</div>
`

const createListRestaurantTemplate = (restaurant) =>
    `<div class="card-item">
        <div class="card-photo">
            <h4>${restaurant.city}</h4>
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-content">
            <h5>${restaurant.name}</h5>
            <h6>Rating : ${restaurant.rating}</h6>
            <p>${restaurant.description}</p>
            <p>...  <a href='/detail/:${restaurant.id}'>Read More</a></p>
        </div>
    </div>`

export { createDetailRestaurantTemplate, createListRestaurantTemplate }
