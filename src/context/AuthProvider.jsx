import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()


const AuthProvider = ( {children} ) => {

  const [userData , setUSerData] =useState(null)

  return (
    <div>
      <AuthContext.Provider value={"Rahul"} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
