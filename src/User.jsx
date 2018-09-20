import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

class User extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props
    return (
      users.map(u => {
        return (
          <div>
            <p>Name: {u.name}</p>
            <p>EMail: {u.email}</p>
          </div>
        )
      })

    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(User)