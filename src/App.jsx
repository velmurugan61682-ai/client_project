import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Welcome from './pages/Welcome'
import AdminDashboard from './pages/Admin/AdminDashboard'
import SalesDashboard from './pages/Sales/SalesDashboard'
import ManufactureDashboard from './pages/Manufacture/ManufactureDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        
        {/* Protected Routes nested under MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/manufacture" element={<ManufactureDashboard />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
