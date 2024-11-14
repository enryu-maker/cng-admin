import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Admin/AdminLogin'
import StationLogin from './pages/Station/StationLogin'
import WorkerLogin from './pages/Worker/WorkerLogin'
import Dashboard from './pages/Station/Dashboard'

export default function App() {
  return (
    <Routes>
      {/* Admin paths */}
      <Route path='/admin-login' element={<AdminLogin />} />

      {/* Station Paths */}
      <Route path='/station-login' element={<StationLogin />} />
      <Route path='/station-dashboard' element={<Dashboard />} />


      {/* Worker Paths */}
      <Route path='/worker-login' element={<WorkerLogin />} />


    </Routes>
  )
}
