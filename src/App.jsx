import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  

  return (
    <div>
      <>
        {!user ? <Login /> : ""}
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard /> */}
      </>
    </div>
  )
}

export default App