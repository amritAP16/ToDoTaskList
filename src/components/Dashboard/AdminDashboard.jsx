import React from 'react'
import Header from '../partials/Header'
import CreateTask from '../partials/CreateTask'
import AllTask from '../partials/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard