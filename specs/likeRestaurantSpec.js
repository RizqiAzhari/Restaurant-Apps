import LikeButtonInitiator from './../src/scripts/utils/like-button-initiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favoritrestaurant-idb'

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867'
      }
    })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('rqdv5juczeskfw1e867')

    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' })

    FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867')
  })
})
