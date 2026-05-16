import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Plus } from 'lucide-react'
import DataTableWrapper from '../../components/tables/DataTableWrapper'
import SalesEntryForm from '../../components/forms/SalesEntryForm'

const SalesDashboard = () => {
  const { orders } = useSelector(state => state.sales)
  const [filterText, setFilterText] = useState('');
  const [showForm, setShowForm] = useState(false);

  const columns = [
    { name: 'Order ID', selector: row => row.id, sortable: true, width: '120px' },
    { name: 'Customer', selector: row => row.customer, sortable: true },
    { name: 'Product', selector: row => row.product, sortable: true },
    { name: 'Amount', selector: row => `$${row.amount}`, sortable: true },
    { 
      name: 'Status', 
      selector: row => row.status, 
      sortable: true,
      cell: row => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          row.status === 'Completed' ? 'bg-success/10 text-success' : 
          row.status === 'Pending' ? 'bg-warning/10 text-warning' : 
          'bg-primary/10 text-primary'
        }`}>
          {row.status}
        </span>
      )
    },
    { name: 'Date', selector: row => row.date, sortable: true },
  ];

  const filteredData = orders.filter(
    item => item.customer.toLowerCase().includes(filterText.toLowerCase()) || 
            item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalSales = orders.reduce((acc, curr) => acc + curr.amount, 0)
  const pendingCount = orders.filter(o => o.status === 'Pending').length
  const completedCount = orders.filter(o => o.status === 'Completed').length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Manage orders and customer relations.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary/20"
        >
          <Plus size={18} />
          <span>New Order</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary">
          <h3 className="text-gray-500 text-sm">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">${totalSales.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-warning">
          <h3 className="text-gray-500 text-sm">Pending Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{pendingCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-success">
          <h3 className="text-gray-500 text-sm">Completed Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{completedCount}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={showForm ? 'lg:col-span-2' : 'lg:col-span-3'}>
          <DataTableWrapper
            title="Recent Orders"
            columns={columns}
            data={filteredData}
            filterText={filterText}
            onFilterChange={e => setFilterText(e.target.value)}
          />
        </div>
        {showForm && (
          <div className="lg:col-span-1">
            <SalesEntryForm onClose={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SalesDashboard
