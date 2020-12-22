import API_ENDPOINT from '../globals/api-endpoint.js'

class RestaurantSources {
  static async homeRestaurant () {
    const response = await fetch(API_ENDPOINT.HOME)
    return response.json()
  }

  static async favoritRestaurant () {
    const response = await fetch(API_ENDPOINT.FAVORIT)
    return response.json()
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default RestaurantSources
