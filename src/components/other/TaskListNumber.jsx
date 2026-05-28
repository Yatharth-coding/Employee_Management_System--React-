import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full'>
        <div className='rounded-xl w-[25%] screen bg-red-400 px-10 py-6'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-0.5'>New Task</h3>
        </div>

        <div className='rounded-xl w-[25%] screen bg-green-400 px-10 py-6'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-0.5'>Complete Task</h3>
        </div>

        <div className='rounded-xl w-[25%] screen bg-yellow-400 px-10 py-6'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-0.5'>Accepted Task</h3>
        </div>

        <div className='rounded-xl w-[25%] screen bg-gray-400 px-10 py-6'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-0.5'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
