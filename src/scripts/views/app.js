import DrawerInitiator from '../utils/drawer-initiator.js'
import UrlParser from '../routes/url-parser.js'
import routes from '../routes/routes.js'

class App {
  constructor ({ menu, hero, main, offcanvas }) {
    this._menu = menu
    this._hero = hero
    this._main = main
    this._offcanvas = offcanvas

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      menu: this._menu,
      hero: this._hero,
      main: this._main,
      offcanvas: this._offcanvas
    })

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._main.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
