import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data , changeUser}) => {
  return (
    <div className='px-5 py-4'>
        <Header changeUser={changeUser} data={data}/>
        <CreateTask data={data}/>
        <AllTask data={data}/>
      
    </div>
  )
}

export default AdminDashboard
