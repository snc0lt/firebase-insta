import React, {createContext, useReducer, useEffect, useState } from 'react'
import { userReducer } from "../reducers/user";
import { auth } from '../Config'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [ user, dispatch ] = useReducer(userReducer, null)
  const [ myUser, setMyUser ] = useState(null)
  
  useEffect(() => {
    let cleanUp = false
    auth.onAuthStateChanged(user => {
      if(!cleanUp){
        if(user) {
          setMyUser(user)
          dispatch({type: 'SET_USER', user: user})
        } else {
          if(!cleanUp){
            dispatch({type: 'LOGOUT_USER'})
          }
        }
      }
    })
    return () => cleanUp = true
  }, [])
  return (
    <UserContext.Provider value = {{ user, dispatch, myUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;