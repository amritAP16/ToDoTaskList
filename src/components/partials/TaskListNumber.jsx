import React from 'react'

const TaskListNumber = ({data}) => {

  return (
    <div className='flex items-start justify-between mt-15 gap-5 '> 
        <div className='bg-red-400 w-1/2 h-30 flex justify-start items-start py-7 px-12 flex-col rounded-2xl'>
            <h2 className='font-semibold text-2xl'> {data.taskCounts.newTask} </h2>
            <h3 className='font-medium text-2xl'>New Task </h3>
        </div>

        <div className='bg-green-400 w-1/2 h-30 flex justify-start items-start py-7 px-12 flex-col rounded-2xl'>
            <h2 className='font-semibold text-2xl'> {data.taskCounts.completed} </h2>
            <h3 className='font-medium text-2xl'>Completed Task </h3>
        </div>

        <div className='bg-blue-400 w-1/2 h-30 flex justify-start items-start py-7 px-12 flex-col rounded-2xl'>
            <h2 className='font-semibold text-2xl'> {data.taskCounts.active} </h2>
            <h3 className='font-medium text-2xl'>Accepted Task </h3>
        </div>

        <div className='bg-yellow-400 w-1/2 h-30 flex justify-start items-start py-7 px-12 flex-col rounded-2xl'>
            <h2 className='font-semibold text-2xl'> {data.taskCounts.failed} </h2>
            <h3 className='font-medium text-2xl'>Failed Task </h3>
        </div>
    </div>
  )
}

export default TaskListNumber