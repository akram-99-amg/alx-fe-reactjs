import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {

    const isAutenticated =localStorage.getItem("isAutenticated")

  return isAutenticated ? children : <Navigate to="/profile" />
}

export default ProtectedRoute
