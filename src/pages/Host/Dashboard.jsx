import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="py-5">
      <h1 className="py-5 text-3xl font-bold">Dashboard page goes here</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard
