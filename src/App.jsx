import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { setLocalStorage } from './utils/localStorage.jsx'
import { getLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null) 


  const handleLogin = (email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log('This is Admin')
    }
    else if(email == 'user@me.com' && password == '123'){
      setUser('user')
      console.log('This is User')
    }
    else{
      alert('Invalid Credentials');
    }
  }

  const data = useContext(AuthContext)
  console.log(data)
  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : ' '}
      {user=='admin' ? <AdminDashboard /> : " "}
      {user=='user' ? <EmployeeDashboard /> : " "}

    </div>
  )
}

export default App
