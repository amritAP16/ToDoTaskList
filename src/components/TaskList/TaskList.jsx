import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-70 flex-nowrap flex items-center justify-start gap-5 mt-10 py-5 overflow-x-auto'>

        <div  className='flex-shrink-0 w-80 h-full bg-red-400 rounded-2xl'>
            <div className='flex justify-between p-5'>
                <h3 className='bg-red-600 px-3 py-1 rounded-lg'>High</h3>
                <h4 className='text-sm py-1.5'>20 feb 2025</h4>
            </div>
            <h2 className='mt-3 text-xl px-3 font-semibold'>Complete Your HomeWork.</h2>
            <p className='text-sm px-3 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non minus magnam consequuntur soluta placeat culpa.
            </p>
        </div>

        <div  className='flex-shrink-0 w-80 h-full bg-green-400 rounded-2xl'>
            <div className='flex justify-between p-5'>
                <h3 className='bg-red-600 px-3 py-1 rounded-lg'>High</h3>
                <h4 className='text-sm py-1.5'>20 feb 2025</h4>
            </div>
            <h2 className='mt-3 text-xl px-3 font-semibold'>Complete Your HomeWork.</h2>
            <p className='text-sm px-3 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non minus magnam consequuntur soluta placeat culpa.
            </p>
        </div>

        <div  className='flex-shrink-0 w-80 h-full bg-blue-400 rounded-2xl'>
            <div className='flex justify-between p-5'>
                <h3 className='bg-red-600 px-3 py-1 rounded-lg'>High</h3>
                <h4 className='text-sm py-1.5'>20 feb 2025</h4>
            </div>
            <h2 className='mt-3 text-xl px-3 font-semibold'>Complete Your HomeWork.</h2>
            <p className='text-sm px-3 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non minus magnam consequuntur soluta placeat culpa.
            </p>
        </div>

        <div  className='flex-shrink-0 w-80 h-full bg-yellow-400 rounded-2xl'>
            <div className='flex justify-between p-5'>
                <h3 className='bg-red-600 px-3 py-1 rounded-lg'>High</h3>
                <h4 className='text-sm py-1.5'>20 feb 2025</h4>
            </div>
            <h2 className='mt-3 text-xl px-3 font-semibold'>Complete Your HomeWork.</h2>
            <p className='text-sm px-3 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non minus magnam consequuntur soluta placeat culpa.
            </p>
        </div>

    </div>
  )
}

export default TaskList