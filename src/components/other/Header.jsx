import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl '>Hello <br /> <span className='text-3xl semibold capitalize'>{data.firstName} 👋</span></h1>
        <button className='bg-red-600 px-3 py-2 rounded-xl text-base text-white '>Log Out</button>
    </div>
  )
}

export default Header
