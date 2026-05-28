import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto flex items-center h-[55%] w-full mt-10 py-4 gap-5'>
        <div className='flex-shrink-0 h-full w-[350px] bg-red-300 rounded-xl px-4 py-4'>
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>High</h3>
                <h3 className='font-semibold'>20 feb 2024</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                Make a youtube video
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum cupiditate laudantium quibusdam debitis architecto iusto?</h3>
        </div>
      <div className='flex-shrink-0 h-full w-[350px] bg-blue-300 rounded-xl px-4 py-4'>
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>High</h3>
                <h3 className='font-semibold'>20 feb 2024</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                Make a youtube video
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum cupiditate laudantium quibusdam debitis architecto iusto?</h3>
        </div>
      <div className='flex-shrink-0 h-full w-[350px] bg-yellow-300 rounded-xl px-4 py-4'>
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>High</h3>
                <h3 className='font-semibold'>20 feb 2024</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                Make a youtube video
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum cupiditate laudantium quibusdam debitis architecto iusto?</h3>
        </div>
      <div className='flex-shrink-0 h-full w-[350px] bg-green-300 rounded-xl px-4 py-4'>
            <div className='flex justify-between items-end'>
                <h3 className='bg-red-600 rounded-sm px-2 py-1'>High</h3>
                <h3 className='font-semibold'>20 feb 2024</h3>
            </div>

            <h2 className='text-2xl font-bold mt-4'>
                Make a youtube video
            </h2>
            <h3 className='text-sm mt-3 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum cupiditate laudantium quibusdam debitis architecto iusto?</h3>
        </div>
      
    </div>
  )
}

export default TaskList
