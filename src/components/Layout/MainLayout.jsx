import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const MainLayout = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (!isAuthenticated && localStorage.getItem('demo') !== 'true') {
     return <Navigate to="/" replace />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col w-0 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 z-0">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
