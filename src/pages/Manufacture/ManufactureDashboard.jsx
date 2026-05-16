import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Settings, Wrench, PackageCheck, AlertTriangle } from 'lucide-react'
import ProductionUpdateForm from '../../components/forms/ProductionUpdateForm'
import DataTableWrapper from '../../components/tables/DataTableWrapper'

const ManufactureDashboard = () => {
  const { lines, wip } = useSelector(state => state.production)
  const { rawMaterials } = useSelector(state => state.inventory)
  const [showForm, setShowForm] = useState(false)
  const [rmFilter, setRmFilter] = useState('')

  const activeLinesCount = lines.filter(l => l.status === 'Running').length
  const lowStockMaterials = rawMaterials.filter(m => m.stock <= m.threshold)

  const rmColumns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '100px' },
    { name: 'Material', selector: row => row.name, sortable: true },
    { name: 'Stock', selector: row => `${row.stock} ${row.unit}`, sortable: true },
    { 
      name: 'Status', 
      cell: row => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          row.stock > row.threshold ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
        }`}>
          {row.stock > row.threshold ? 'Healthy' : 'Low Stock'}
        </span>
      )
    },
  ]

  const filteredRM = rawMaterials.filter(m => m.name.toLowerCase().includes(rmFilter.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manufacturing & Production</h1>
          <p className="text-gray-500 text-sm mt-1">Monitor production lines and inventory.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary/20"
          >
            Update Production
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg text-primary"><Settings size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Active Lines</p>
              <h3 className="text-2xl font-bold">{activeLinesCount}/{lines.length}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg text-success"><PackageCheck size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">WIP Batches</p>
              <h3 className="text-2xl font-bold">{wip.length}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg text-warning"><Wrench size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Maintenance</p>
              <h3 className="text-2xl font-bold">{lines.length - activeLinesCount} Line(s)</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-danger/10 rounded-lg text-danger"><AlertTriangle size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Low Stock</p>
              <h3 className="text-2xl font-bold">{lowStockMaterials.length} Items</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-800">Production Lines Status</h2>
            </div>
            <div className="p-6 space-y-6">
              {lines.map((line) => (
                <div key={line.id} className="border border-gray-100 rounded-xl p-4 hover:border-primary/30 transition-colors bg-gray-50/30">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-bold text-gray-800">{line.id}</h3>
                      <span className="text-sm text-gray-500">• {line.product}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      line.status === 'Running' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    }`}>
                      {line.status}
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium">{line.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${line.status === 'Running' ? 'bg-primary' : 'bg-gray-400'}`} 
                        style={{ width: `${line.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DataTableWrapper
            title="Raw Materials Inventory"
            columns={rmColumns}
            data={filteredRM}
            filterText={rmFilter}
            onFilterChange={(e) => setRmFilter(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {showForm && (
            <ProductionUpdateForm onClose={() => setShowForm(false)} />
          )}

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-danger" size={20} />
              Stock Alerts
            </h2>
            <div className="space-y-4">
              {lowStockMaterials.length === 0 ? (
                <p className="text-sm text-gray-500">All materials are well-stocked.</p>
              ) : (
                lowStockMaterials.map(m => (
                  <div key={m.id} className="flex justify-between items-center p-3 bg-danger/5 border border-danger/10 rounded-xl">
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{m.name}</h4>
                      <p className="text-xs text-danger">Only {m.stock} {m.unit} left</p>
                    </div>
                    <button className="text-xs font-semibold text-primary hover:underline">Reorder</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufactureDashboard
