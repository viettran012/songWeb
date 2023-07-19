import routesConfig from "../configs/routes"

//import Layout
import DefaultLayout from "../layouts/DefaultLayout"

//import Pages
import Home from "../pages/Home"
import PlayList from "../pages/PlayList"
import Player from "../pages/Player"

// Vào được khi chưa đăng nhập
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
    layout: DefaultLayout,
    sidebar: null,
  },
  {
    path: routesConfig.explore,
    component: Home,
    layout: DefaultLayout,
    sidebar: null,
  },
  {
    path: routesConfig.library,
    component: Home,
    layout: DefaultLayout,
    sidebar: null,
  },
  {
    path: routesConfig.playlist,
    component: PlayList,
    layout: DefaultLayout,
    sidebar: null,
  },
  {
    path: routesConfig.player,
    component: Player,
    layout: DefaultLayout,
    sidebar: null,
  },
]

// Cần đăng nhập mới có thể vào được routes

export { publicRoutes }
