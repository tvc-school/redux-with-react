export const getUsers = () => {
  return ({
    type: 'getUsers',
  })
}



export const addUser = (user) => {
  return ({
    type: 'addUser',
    payload: { user }
  })
}



