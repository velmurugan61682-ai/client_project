import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/Admin/AdminDashboard'
import SalesDashboard from './pages/Sales/SalesDashboard'
import ManufactureDashboard from './pages/Manufacture/ManufactureDashboard'
import InventoryDashboard from './pages/Inventory/InventoryDashboard'
import Reports from './pages/Reports'
import Payments from './pages/Payments'
import Customers from './pages/Customers'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes nested under MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/manufacture" element={<ManufactureDashboard />} />
          <Route path="/inventory" element={<InventoryDashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
