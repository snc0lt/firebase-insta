const initialState = {
  user: null,
  authenticated: false
}

export const userReducer = ( state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER':
        return {
          authenticated: true,
          user: action.user
        }

    case 'LOGOUT_USER':
      return state

    default: 
        return state
  }
}