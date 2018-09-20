import React, { Component } from 'react'
import './App.css'
import Users from './Users'
import AddUser from './AddUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React with Redux</h1>
        </header>
        <AddUser />
        <Users />
      </div>
    )
  }
}

export default App
