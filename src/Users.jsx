import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

const usersStyle = {
  textAlign: 'left',
}

class User extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props
    return (users.map(u => {return (<div style={usersStyle}><p>name: {u.name}</p><p>EMail: {u.email}</p><hr/></div>)}))
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(User)

