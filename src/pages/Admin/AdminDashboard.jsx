import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Users, TrendingUp, Package, AlertCircle } from 'lucide-react'
import KpiCard from '../../components/cards/KpiCard'
import RevenueChart from '../../components/charts/RevenueChart'
import ProductionPieChart from '../../components/charts/ProductionPieChart'
import DataTableWrapper from '../../components/tables/DataTableWrapper'

const AdminDashboard = () => {
  const { metrics, revenueData, productionData, users } = useSelector(state => state.dashboard)
  const [userFilter, setUserFilter] = useState('')

  const stats = [
    { title: 'Total Users', value: metrics.totalUsers, icon: <Users size={24} className="text-primary" />, trend: '+12%', colorClass: 'bg-primary/10' },
    { title: 'Monthly Revenue', value: `$${metrics.monthlyRevenue.toLocaleString()}`, icon: <TrendingUp size={24} className="text-success" />, trend: '+8.4%', colorClass: 'bg-success/10' },
    { title: 'Active Orders', value: metrics.activeOrders, icon: <Package size={24} className="text-warning" />, trend: '+2.1%', colorClass: 'bg-warning/10' },
    { title: 'Critical Issues', value: metrics.criticalIssues, icon: <AlertCircle size={24} className="text-danger" />, trend: '-5%', colorClass: 'bg-danger/10' },
  ]

  const userColumns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '100px' },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Role', selector: row => row.role, sortable: true },
    { 
      name: 'Status', 
      selector: row => row.status, 
      sortable: true,
      cell: row => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          row.status === 'Active' ? 'bg-success/10 text-success' : 'bg-gray-100 text-gray-500'
        }`}>
          {row.status}
        </span>
      )
    },
  ]

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(userFilter.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">System overview and analytics.</p>
        </div>
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary/20">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <KpiCard key={idx} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={revenueData} />
        </div>
        <div>
          <ProductionPieChart data={productionData} />
        </div>
      </div>

      <div className="mt-8">
        <DataTableWrapper 
          title="User Management"
          columns={userColumns}
          data={filteredUsers}
          filterText={userFilter}
          onFilterChange={(e) => setUserFilter(e.target.value)}
          placeholder="Search users..."
        />
      </div>
    </div>
  )
}

export default AdminDashboard
