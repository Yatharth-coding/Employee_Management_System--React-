import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/createTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='px-5 py-4'>
        <Header />
        <CreateTask />
        <AllTask />
      
    </div>
  )
}

export default AdminDashboard
