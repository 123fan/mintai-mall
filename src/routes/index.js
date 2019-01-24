import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'

export const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/login',
    component: Login
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
                return !sessionStorage.getItem('token') || item.path === '/login' ?
                  <item.component {...props} />
                  :
                  <Redirect to={{ pathname: '/login' }} />
              }
            }
          />
        })
      )}
    </Switch>
  )
}