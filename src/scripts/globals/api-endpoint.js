import CONFIG from './config.js'

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  FAVORIT: `${CONFIG.BASE_URL}/search?q=query`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`
}

export default API_ENDPOINT
