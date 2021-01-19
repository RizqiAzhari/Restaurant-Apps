import 'regenerator-runtime' /* for async await transpile */
import '../styles/small.scss'
import '../styles/medium.scss'
import '../styles/main.scss'
import App from './views/app.js'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  menu: document.querySelector('.menu-logo'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('#maincontent'),
  offcanvas: document.querySelector('#off-canvas')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
  
})

import('lodash.filter')
.then((module) => module.default)
.catch((error) => alert(error));

export default app
