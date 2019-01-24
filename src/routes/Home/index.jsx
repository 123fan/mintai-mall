import React from 'react'
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'


class Home extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <AppHeader />
        这是Home组件
        <AppFooter />
      </div>
    )
  }
}

export default Home
