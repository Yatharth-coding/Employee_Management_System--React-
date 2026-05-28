import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { setLocalStorage } from './utils/localStorage.jsx'
import { getLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null) 
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(()=>{

  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // } ,[authData])


  const handleLogin = (email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin'}))
    }
    else if(authData ){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password) ;
      if(employee){
        setUser('user')
        setLoggedInUserData(employee)
        
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'user'}))
      }

    }
    else{
      alert('Invalid Credentials');
    }
  }

  
  return (
    <div className='bg-[#1c1c1c]'>
      {!user ? <Login handleLogin={handleLogin}/> : ' '}
      {user=='admin' ? <AdminDashboard /> : ( user=='user' ? <EmployeeDashboard data={loggedInUserData}/> : null)}
      

    </div>
  )
}

export default App
