import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const authProtected = ["/login", "/register"]
  const tokenProtected = []

  return <Outlet />
}

export default ProtectedRoutes