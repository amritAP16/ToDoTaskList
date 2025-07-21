import React from 'react'

const AcceptTask = ({data}) => {
  return (
     <div  className='flex-shrink-0 w-90 h-full bg-red-400 rounded-2xl'>
            <div className='flex justify-between p-5'>
                <h3 className={`h-1/3 px-3 py-1 rounded-lg ${data.priority === "high"? "bg-red-600": data.priority === "medium" ? "bg-yellow-600" : "bg-green-600" }`}>{data.priority}</h3>
                <h3 className='h-1/3 bg-cyan-950  px-3 py-1 rounded-lg'>{data.category}</h3>
                <h4 className={`h-1/3 px-3 py-1 rounded-lg ${data.priority === "high"? "bg-red-600": data.priority === "medium" ? "bg-yellow-600" : "bg-green-600" }`}>{data.date}</h4>
            </div>
            <h2 className='mt-3 text-xl px-3 font-semibold'>{data.title}</h2>
            <p className='text-sm px-3 mt-1'>
                {data.description}
            </p>
            <div className='flex items-start justify-between p-4'>
                <button className='bg-green-600 hover:bg-green-800 px-2 rounded-md text-sm'>Mark as Completed</button>
                <button className='bg-red-600 hover:bg-red-800 px-2 rounded-md text-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask