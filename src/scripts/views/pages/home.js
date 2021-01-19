import RestaurantSources from '../../data/restaurant-sources.js'
import { createListRestaurantTemplate } from '../templates/template-creator.js'

const Home = {
  async render () {
    const hero = document.querySelector('.hero')
    hero.style.display = 'block'
    return `
      <h2>Explore Restaurant</h2>
      <div class="cardList" id="cardList"></div>
    `
  },

  async afterRender () {
    const listRestaurants = await RestaurantSources.homeRestaurant()
    const listCards = document.querySelector('#cardList')

    // TODO: tampilkan restaurant di dalam DOM
    listRestaurants.restaurants.forEach((restaurant) => {
      listCards.innerHTML += createListRestaurantTemplate(restaurant)
    })
  }
}

export default Home
