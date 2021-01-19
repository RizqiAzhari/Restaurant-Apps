import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favoritrestaurant-idb'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867')
  })

  it('should display unlike widget when the Restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy()
  })

  it('should not display like widget when the Restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy()
  })

  it('should be able to remove liked Restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the unliked Restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    // hapus dulu restoran dari daftar restoran yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867')

    // kemudian, simulasikan pengguna menekan widget batal menyukai restoran
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
