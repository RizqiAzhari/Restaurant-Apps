import RestaurantSources from '../../data/restaurant-sources.js'

const Favorit = {
  async render () {
    return `
      <h2>Favorite Restaurant</h2>
    `
  },

  async afterRender () {
    const favorites = await RestaurantSources.favoritRestaurant()
    console.log(favorites)

    // TODO: tampilkan movies di dalam DOM
  }
}

export default Favorit
