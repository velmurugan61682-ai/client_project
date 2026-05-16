import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/authSlice'
import { ShieldCheck, ShoppingCart, Factory, ArrowRight, User } from 'lucide-react'
import { toast } from 'react-hot-toast'

const Welcome = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const roles = [
    { id: 'admin', title: 'Admin', icon: <ShieldCheck size={40} className="mb-4 text-primary" />, desc: 'Full system access & analytics' },
    { id: 'sales', title: 'Sales', icon: <ShoppingCart size={40} className="mb-4 text-warning" />, desc: 'Manage orders & customers' },
    { id: 'manufacture', title: 'Manufacture', icon: <Factory size={40} className="mb-4 text-success" />, desc: 'Production & inventory' },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    if (!selectedRole) {
      toast.error('Please select a role first')
      return
    }
    if (!username || !password) {
      toast.error('Please enter credentials')
      return
    }

    dispatch(login({
      user: { name: username },
      role: selectedRole,
      token: 'mock-jwt-token'
    }))
    
    localStorage.setItem('demo', 'true')
    toast.success(`Logged in as ${selectedRole}`)
    navigate(`/${selectedRole}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="z-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          CMMS Portal
        </h1>
        <p className="text-gray-500 text-lg">Complete Manufacturing Management System</p>
      </div>

      <div className="glass-card p-8 w-full max-w-4xl z-10 flex flex-col md:flex-row gap-8 items-center">
        
        <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-full mb-2">
            <h2 className="text-xl font-bold text-gray-800">Select Your Module</h2>
            <p className="text-sm text-gray-500">Choose your workspace to continue</p>
          </div>
          {roles.map(role => (
            <div 
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                selectedRole === role.id 
                  ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                  : 'border-gray-100 hover:border-primary/30 hover:bg-gray-50 hover:shadow-md bg-white'
              } ${role.id === 'admin' ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col items-center text-center">
                {role.icon}
                <h3 className="text-lg font-bold text-gray-800 capitalize">{role.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 block w-full rounded-xl border border-gray-200 bg-gray-50 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="admin / sales / mfg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl py-3 px-4 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 mt-4"
            >
              <span>Login to {selectedRole ? selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1) : 'Portal'}</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Welcome
