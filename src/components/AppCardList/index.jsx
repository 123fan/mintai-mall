import React from 'react'
import { withRouter } from 'react-router-dom'
import AppCard from '../AppCard'


class AppCardList extends React.Component {

  state = {
    a: [1,2,3,4]
  }

  render () {
    return (
      <div className="ldq-flex">
        {
          this.state.a.map(item => {
            return <AppCard key={item} />
          })
        }
      </div>
    )
  }
}

export default withRouter(AppCardList)
