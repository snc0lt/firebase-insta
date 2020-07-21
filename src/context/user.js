import React, {createContext, useReducer, useEffect } from 'react'
import { userReducer } from "../reducers/user";
import { auth } from '../Config'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [ user, dispatch ] = useReducer(userReducer)
  useEffect(() => {
    const cleanUp = auth.onAuthStateChanged(user => {
      if(user) {
        dispatch({type: 'SET_USER', user: user})
      } else {
        dispatch({type: 'LOGOUT_USER'})
      }
    })
    return () => cleanUp()
  }, [])
  return (
    <UserContext.Provider value = {{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;