import 'regenerator-runtime' /* for async await transpile */
import '../styles/small.scss'
import '../styles/medium.scss'
import '../styles/main.scss'
import App from './views/app.js'

const app = new App({
  menu: document.querySelector('.menu-logo'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  offcanvas: document.querySelector('#off-canvas')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})

// let card_item = ''
// data.restaurants.forEach(restaurant => {
//   card_item += `
//         <div class="card-item">
//             <div class="card-photo">
//                 <h4>${restaurant.city}</h4>
//                 <img src="${restaurant.pictureId}" alt="${restaurant.name}">
//             </div>
//             <div class="card-content">
//                 <h5>${restaurant.name}</h5>
//                 <h6>Rating : ${restaurant.rating}</h6>
//                 <p>${restaurant.description}</p>
//                 <p>...  <a href=#>Read More</a></p>
//             </div>
//         </div>`
// })
// document.getElementById('card-list').innerHTML = card_item

export default app
