import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser' , '')
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl '>Hello <br /> <span className='text-3xl semibold capitalize'>username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-3 py-2 rounded-xl text-base text-white '>Log Out</button>
    </div>
  )
}

export default Header
