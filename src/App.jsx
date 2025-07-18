import React, {useEffect, useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext);

  useEffect(() => {
   if(authData){
    const loggedInUser =  JSON.parse(localStorage.getItem("loggedInUser"));
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
   }
    }, [authData]);
  



  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){ 
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if(authData && authData?.employees.find((e)=> email == e.email && password == e.password )){
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    }else{
      alert("Invalid Credentials")
    }
  }

  
  

  return (
    <div>
      <>
        {!user ? <Login handleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
        {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : null}
      </>
    </div>
  )
}

export default App