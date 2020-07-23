import React, {createContext, useEffect, useState } from 'react'

import { auth } from '../Config'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
      auth.onAuthStateChanged(setCurrentUser)
  }, [])
  
  return (
    <UserContext.Provider value = {{ currentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;