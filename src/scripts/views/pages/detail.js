import UrlParser from '../../routes/url-parser.js'
import RestaurantSources from '../../data/restaurant-sources.js'
import { createDetailRestaurantTemplate } from '../templates/template-creator.js'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    const hero = document.querySelector('.hero')
    hero.style.display = 'none'
    return `
      <h2>Detail Restaurant</h2>
      <div class="cardDetail" id="cardDetail"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurantDetail = await RestaurantSources.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#cardDetail')

    // TODO: tampilkan restaurant di dalam DOM
    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurantDetail.restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      // get selected data restaurant
      restaurant: {
        id: restaurantDetail.restaurant.id,
        name: restaurantDetail.restaurant.name,
        description: restaurantDetail.restaurant.description,
        city: restaurantDetail.restaurant.city,
        address: restaurantDetail.restaurant.address,
        pictureId: restaurantDetail.restaurant.pictureId,
        categories: restaurantDetail.restaurant.categories,
        menus: restaurantDetail.restaurant.menus,
        rating: restaurantDetail.restaurant.rating,
        customerReviews: restaurantDetail.restaurant.customerReviews
      }
    })
  }
}

export default Detail
