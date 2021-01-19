import FavoriteRestaurantIdb from '../../data/favoritrestaurant-idb.js'
import { createListRestaurantTemplate } from '../templates/template-creator.js'

const Favorit = {
  async render () {
    const hero = document.querySelector('.hero')
    hero.style.display = 'none'
    return `
      <h2>Your Favorite Restaurant</h2>
      <div id="favorite-restaurant" class="favorite-restaurant"></div>
    `
  },

  async afterRender () {
    const favoritesRestaurant = await FavoriteRestaurantIdb.getAllRestaurants()
    const favoriteListContainer = document.querySelector('#favorite-restaurant')

    // TODO: tampilkan restaurants di dalam DOM
    favoritesRestaurant.forEach((restaurant) => {
      favoriteListContainer.innerHTML += createListRestaurantTemplate(restaurant)
    })
  }
}

export default Favorit
