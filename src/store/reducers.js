import { combineReducers } from 'redux'

const initUsers = [
  { name: 'Jo', email: 'jo@email.com'},
  { name: 'Bo', email: 'bo@email.com'}
]

const users = (state = initUsers, { type, payload }) => {
  switch (type) {
    case 'getUsers':
      return state
    case 'addUser':
      return state.concat([payload.user])
    default:
      return state
  }
}

export default combineReducers({
  users,
})

