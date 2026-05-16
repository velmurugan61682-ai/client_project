import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Bell, Search, LogOut } from 'lucide-react'
import { logout } from '../../store/slices/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-96 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all">
        <Search className="text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none ml-2 w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full"></span>
        </button>
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-danger px-3 py-2 rounded-lg hover:bg-danger/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
