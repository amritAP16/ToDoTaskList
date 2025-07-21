import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext);

    // console.log(userData.employees);
    
  return (
    <div className='bg-zinc-800 p-5 mt-5 rounded-2xl  '>

        <div  className=' bg-rose-400 mb-2 py-2 px-4 rounded flex justify-between '>
                <h2 className='w-1/5 font-bold'>Employee Name</h2>
                <h3 className='w-1/5 font-bold'>New Task</h3>
                <h5 className='w-1/5 font-bold'>Active Task</h5>
                <h5 className='w-1/5 font-bold'>Completed Task</h5>
                <h5 className='w-1/5 font-bold'>Failed Task</h5>
            </div>
        
        <div className=' '> 
            {userData.employees.map((elem,idx)=>{
            return (
            <div key={idx}  className='bg-zinc-700 border-2 border-emerald-600 mb-2 py-2 px-4 rounded flex justify-between hover:bg-zinc-600'>
                <h2 className='w-1/5 text-white font-semibold'>{elem.firstName}</h2>
                <h3 className='w-1/5 text-blue-400 font-semibold'>{elem.taskCounts.newTask}</h3>
                <h5 className='w-1/5 text-yellow-400  font-semibold'>{elem.taskCounts.active}</h5>
                <h5 className='w-1/5 text-green-400 font-semibold'>{elem.taskCounts.completed}</h5>
                <h5 className='w-1/5 text-red-400 font-semibold'>{elem.taskCounts.failed}</h5>
            </div>
            )
        })}
        </div>
        
        </div>
  )
}

export default AllTask