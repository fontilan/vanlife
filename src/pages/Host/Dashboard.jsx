import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <h1>Dashboard page goes here</h1>
      <Outlet />
    </>
  )
}

export default Dashboard
