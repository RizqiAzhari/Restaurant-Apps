import RestaurantSources from '../../data/restaurant-sources.js'
import { createListRestaurantTemplate } from '../templates/template-creator.js'

const Home = {
  async render () {
    return `
      <h3>Explore Restaurant</h3>
    `
  },

  async afterRender () {
    const listRestaurant = await RestaurantSources.homeRestaurant()
    const listCards = document.getElementById('card-list')

    // TODO: tampilkan restaurant di dalam DOM
    listRestaurant.restaurants.forEach((restaurant) => {
      listCards.innerHTML += createListRestaurantTemplate(restaurant)
    })
  }
}

export default Home
