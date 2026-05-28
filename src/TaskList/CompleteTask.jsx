import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-[300px] w-[350px] bg-green-400 rounded-xl px-4 py-4'>
        <h1>Complete Task</h1><br />
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>{data.category}</h3>
                <h3 className='font-semibold'>{data.taskDate}</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                {data.taskTitle}
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>{data.taskDescription}</h3>
            <div className='flex gap-5 mt-15 items-center justify-between'>
                <button className='bg-green-300 rounded-md px-2 py-1 w-full'>Completed</button>
                
            </div>
        </div>
    </div>
  )
}

export default CompleteTask
