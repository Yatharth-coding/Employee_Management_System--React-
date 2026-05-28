import React from 'react'

const CreateTask = () => {
  return (
    <div className=' flex items-start justify-between px-5 py-4 mt-5 bg-gray-600 '>
        <div className='w-1/2 gap-10 mx-5'>
            <div>
                <h3>Task Title</h3>
                <input type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Make a UI design' />
            </div>

            <div>
                <h3>Date</h3>
                <input type="date" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Make a UI design' />            
            </div>

            <div>
                <h3>Assign to</h3>
                <input type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Employee name' />            
            </div>

            <div>
                <h3>Category</h3>
                <input type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='design, dev, etc' />            
            </div>
        </div>
        <div className='w-1/2 mx-5 my-0 '>
            <div className='flex flex-col '>
                <h3>Description</h3>
                <textarea className='h-56 mt-2 w-full border-[1px] px-2 py-1 outline-none bg-transparent border-gray-400 rounded-md mb-4 ' name="" id=""></textarea>
                <button className='px-10 py-3 bg-emerald-400 w-full rounded-md hover:bg-emerald-600'>Create Task</button>
            </div>
        </div>
      </div>
  )
}

export default CreateTask
