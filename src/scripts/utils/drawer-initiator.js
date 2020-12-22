const DrawerInitiator = {
  init ({ menu, hero, main, offcanvas }) {
    menu.addEventListener('click', (event) => {
      this._displayDrawer(event, offcanvas)
    })

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, offcanvas)
    })

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, offcanvas)
    })
  },

  _displayDrawer (event, offcanvas) {
    event.stopPropagation()
    offcanvas.classList.add('open')
    offcanvas.classList.remove('hide')
  },

  _closeDrawer (event, offcanvas) {
    event.stopPropagation()
    offcanvas.classList.add('hide')
    offcanvas.classList.remove('open')
  }
}

export default DrawerInitiator
