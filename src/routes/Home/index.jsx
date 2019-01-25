import React from 'react'
import { routeIfy } from '../../routes'
import { Switch, Redirect } from 'react-router-dom'
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'


class Home extends React.Component {

  state = {}

  render () {
    console.log(this.props)
    
    return (
      <div>
        <AppHeader />
        <Switch>
          {routeIfy(this.props.routes)}
          <Redirect to={{ pathname: '/home/main' }} />
        </Switch>
        <AppFooter />
      </div>
    )
  }
}

export default Home
