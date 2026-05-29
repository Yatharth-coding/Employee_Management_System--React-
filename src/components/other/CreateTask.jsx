import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle , setTaskTitle] = useState('');
    const [taskDate , setTaskDate] = useState('');
    const [taskAssign , setTaskAssign] = useState('');
    const [taskCategory , setTaskCategory] = useState('');
    const [taskDescription , setTaskDescription] = useState('');

    const submitHandler = ((e)=>{
        e.preventDefault();
        console.log(taskTitle , taskDate , taskAssign , taskCategory , taskDescription) ; 

    })



  return (
    <div className='px-5 py-4 mt-5 bg-gray-600 '>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <div className='flex'>
                <div className=' flex flex-col w-1/2 gap-5 mx-5'>
                    <div>
                        <h3>Task Title</h3>
                        <input
                        value = {taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value);

                        }}
                        type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Make a UI design' />
                    </div>

                    <div>
                        <h3>Date</h3>
                        <input
                        value = {taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value);

                        }}
                        type="date" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Make a UI design' />            
                    </div>

                    <div>
                        <h3>Assign to</h3>
                        <input
                        value = {taskAssign}
                        onChange={(e)=>{
                            setTaskAssign(e.target.value);

                        }}
                        type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='Employee name' />            
                    </div>

                    <div>
                        <h3>Category</h3>
                        <input
                        value = {taskCategory}
                        onChange={(e)=>{
                            setTaskCategory(e.target.value);

                        }}
                        type="text" className='w-full px-2 py-1 border-[1px] outline-none bg-transparent border-gray-400 rounded-md mt-1 mb-6 ' placeholder='design, dev, etc' />            
                    </div>
                </div>
            <div className='w-1/2 mx-5 my-0 '>
            <div className='flex flex-col mt-1 '>
                <div className=''>
                    <h3>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='h-70 mt-2 w-full border-[1px] px-2 py-1 outline-none bg-transparent border-gray-400 rounded-md mb-4 ' name="" id=""></textarea>
                </div>
                <button className='px-10 py-3 bg-emerald-400 w-full rounded-md hover:bg-emerald-600'>Create Task</button>
            </div>
        </div>
        </div>
            </form>
      </div>
  )
}

export default CreateTask
