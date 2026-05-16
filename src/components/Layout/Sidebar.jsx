import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Factory, 
  Users, 
  Settings,
  Package
} from 'lucide-react'

const Sidebar = () => {
  const role = useSelector(state => state.auth.role) || 'admin';
  const location = useLocation()

  const getLinks = () => {
    switch(role) {
      case 'admin':
        return [
          { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
          { name: 'Sales', path: '/sales', icon: <ShoppingCart size={20} /> },
          { name: 'Manufacture', path: '/manufacture', icon: <Factory size={20} /> },
          { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
          { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> }
        ]
      case 'sales':
        return [
          { name: 'Sales Dashboard', path: '/sales', icon: <ShoppingCart size={20} /> },
        ]
      case 'manufacture':
        return [
          { name: 'Production', path: '/manufacture', icon: <Factory size={20} /> },
          { name: 'Inventory', path: '/manufacture/inventory', icon: <Package size={20} /> },
        ]
      default:
        return []
    }
  }

  const links = getLinks()

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 h-screen sticky top-0 flex flex-col shadow-lg z-20">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 bg-primary/5">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          CMMS Portal
        </h1>
      </div>
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-primary text-white shadow-md shadow-primary/30' 
                  : 'text-gray-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </NavLink>
          )
        })}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {role.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 capitalize">{role}</p>
            <p className="text-xs text-gray-500">Logged in</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
