
import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Autenticated from './components/Autenticated'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'


const Router = createBrowserRouter([{
  path: "/",
  element: <Autenticated />
}, {
  path: "/profile",
  element: (<ProtectedRoute><Profile /></ProtectedRoute>),
  children: [
    {
      path: "details",
      element: <ProfileDetails />
    },
    {
      path: "settings",
      element: <ProfileSettings />
    }
  ]


}]
)




export default Router
