import React, { useContext, useEffect } from 'react'
import  { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const userData  = useContext(AuthContext)

  return (
    <div id='tasklist' className='bg-[#1c1c1c] mt-10 h-40 '>
      <div className='flex overflow-auto items-center py-2 px-4 bg-red-400 rounded-md justify-between mb-4 sticky top- z-10'>
        <h2 className='text-white  w-1/5  '>Employee Name</h2>
        <h3 className='text-white  w-1/5  '>New Task</h3>
        <h5 className='text-white  w-1/5  '>Active Task</h5>
        <h5 className='text-white  w-1/5  '>Completed</h5>
        <h5 className='text-white  w-1/5  '>Failed</h5>
      </div>
      
      <div className=''>
        {
        userData.employees.map(function(elem , idx){
          return <div key={idx} className='flex items-center border-emerald-600 border-[1px] py-2 px-4 rounded-md justify-between mb-4'>
              <h2 className='text-white px-8 w-1/5 '>{elem.firstName} </h2>
              <h3 className='text-white px-8 w-1/5 '>{elem.taskCounts.newTask} </h3>
              <h5 className='text-white px-8 w-1/5 '>{elem.taskCounts.completed}</h5>
              <h5 className='text-white px-8 w-1/5 '>{elem.taskCounts.active} </h5>
              <h5 className='text-white px-8 w-1/5 '>{elem.taskCounts.failed} </h5>
          </div>
        })
      }
      </div>
      <br />

            
    </div>
  )
}

export default AllTask