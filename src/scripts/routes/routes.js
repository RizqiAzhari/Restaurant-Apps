import Home from '../views/pages/home.js'
import Favorit from '../views/pages/favorit.js'
import Detail from '../views/pages/detail.js'

const routes = {
  '/': Home, // default page
  '/favorit': Favorit,
  '/detail/:id': Detail
}

export default routes
