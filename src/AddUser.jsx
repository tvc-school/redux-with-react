import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

class AddUser extends React.Component {
  state = {
    name: '',
    email: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser = () => {
    this.props.addUser({
      name: this.state.name,
      email: this.state.email,
    })
  }

  render() {
    return (
      <div>
        <div>
        <label>Name: </label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />
        </div>
        <button
          onClick={this.addUser}
        >
          Add User
        </button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, actions)(AddUser)