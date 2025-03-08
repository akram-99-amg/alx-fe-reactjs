import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Profile = () => {
const navigate = useNavigate()
const handleLogout=()=>{
    localStorage.removeItem("isAutenticated");
    navigate("/")
}
  return (
    <div>
      profile
    <Outlet />
    <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile
