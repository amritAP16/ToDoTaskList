import React from 'react'
import Header from '../partials/Header'
import CreateTask from '../partials/CreateTask'
import AllTask from '../partials/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header  data={data}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard