import UrlParser from '../../routes/url-parser.js'
import RestaurantSources from '../../data/restaurant-sources.js'

const Detail = {
  async render () {
    return `
      <h2>Detail Restaurant</h2>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const details = await RestaurantSources.detailRestaurant(url.id)
    console.log(details)

    // TODO: tampilkan movie di dalam DOM
  }
}

export default Detail
