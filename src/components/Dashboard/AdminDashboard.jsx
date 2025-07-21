import React from 'react'
import Header from '../partials/Header'
import CreateTask from '../partials/CreateTask'
import AllTask from '../partials/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className=' bg-[#1c1c1c] w-full px-10'>
        <Header  changeUser ={props.changeUser}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard