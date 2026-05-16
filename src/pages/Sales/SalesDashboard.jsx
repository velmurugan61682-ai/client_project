import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Plus, Search } from 'lucide-react'

const SalesDashboard = () => {
  const [filterText, setFilterText] = useState('');

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
          'bg-danger/10 text-danger'
        }`}>
          {row.status}
        </span>
      )
    },
    { name: 'Date', selector: row => row.date, sortable: true },
  ];

  const data = [
    { id: 'ORD-001', customer: 'TechCorp Inc.', product: 'Industrial Motor', amount: 4500, status: 'Completed', date: '2024-05-10' },
    { id: 'ORD-002', customer: 'Global Solutions', product: 'Control Panel', amount: 2300, status: 'Pending', date: '2024-05-11' },
    { id: 'ORD-003', customer: 'Alpha Manufacturing', product: 'Sensor Array', amount: 890, status: 'Processing', date: '2024-05-12' },
    { id: 'ORD-004', customer: 'Beta Dynamics', product: 'Valve Assembly', amount: 3400, status: 'Completed', date: '2024-05-12' },
    { id: 'ORD-005', customer: 'Quantum Co.', product: 'Power Supply', amount: 1200, status: 'Pending', date: '2024-05-13' },
  ];

  const filteredData = data.filter(
    item => item.customer.toLowerCase().includes(filterText.toLowerCase()) || 
            item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Manage orders and customer relations.</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary/20">
          <Plus size={18} />
          <span>New Order</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary">
          <h3 className="text-gray-500 text-sm">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">$12,290</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-warning">
          <h3 className="text-gray-500 text-sm">Pending Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">2</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-success">
          <h3 className="text-gray-500 text-sm">Completed Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">24</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          customStyles={{
            headRow: {
              style: {
                backgroundColor: '#f9fafb',
                color: '#4b5563',
                fontWeight: '600',
              },
            },
            cells: {
              style: {
                paddingTop: '12px',
                paddingBottom: '12px',
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default SalesDashboard
