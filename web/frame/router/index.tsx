import { RouteObject } from 'react-router-dom'
import HomeWrap from '~/frame/layout/home'
import WebWrap from '@layout/web'

const route: RouteObject[] = [
  {
    path: '/',
    element: <HomeWrap />
  },
  {
    path: '/home',
    element: <HomeWrap />
  },
  {
    path: '/web',
    element: <WebWrap />
  }
]
export default route
