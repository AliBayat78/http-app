import FullComment from './pages/FullComment/FullComment'
import HomePage from './pages/HomePage'
import NewComment from './pages/NewComment/NewComment'
import NotFound from './pages/NotFound'

const routes = [
  { path: '/new-comment', component: NewComment },
  { path: '/', component: HomePage },
  { path: '*', component: NotFound },
  { path: '/comment/:id', component: FullComment },
]

export default routes
