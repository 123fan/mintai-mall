import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Main from './Main'
import About from './About'
import Download from './Download'
import Mall from './Mall'
import App from './App'
import GoodsDetail from './GoodsDetail'
import ShoppingCar from './ShoppingCar'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  }, {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/main',
        component: Main
      }, {
        path: '/home/about',
        component: About
      }, {
        path: '/home/download',
        component: Download
      }, {
        path: '/home/mall',
        component: Mall
      }, {
        path: '/home/app',
        component: App
      }, {
        path: '/home/GoodsDetail',
        component: GoodsDetail
      }, {
        path: '/home/shoppingCar',
        component: ShoppingCar
        },
    ]
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }
]

export function routeIfy (routes) {
  if (!routes) return null
  return (
    <Switch>
      {(
        routes.map(item => {
          return <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            render={
              props => {
                if (item.path === '/login') {
                  return <item.component {...props} routes={item.routes} />
                } else {
                  return sessionStorage.getItem('token') ?
                    <item.component {...props} routes={item.routes} />
                    :
                    <Redirect to={{ pathname: '/login' }} />
                }
              }
            }
          />
        })
      )}
    </Switch>
  )
}
