import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-[300px] w-[350px] bg-yellow-500 rounded-xl px-4 py-4'>
            <h1>Accepted Task</h1><br />
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>{data.category}</h3>
                <h3 className='font-semibold'>{data.taskDate}</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                {data.taskTitle}
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>{data.taskDescription}</h3>
            <div className='flex gap-5 mt-15 items-center justify-between'>
                <button className='bg-green-300 rounded-md px-2 py-1'>Mark as Completed</button>
                <button className='bg-red-400 rounded-md px-2 py-1'>Mark as Failed</button>
            </div>
        </div>
    </div>
  )
}

export default AcceptTask
