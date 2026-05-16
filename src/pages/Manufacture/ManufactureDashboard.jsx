import React from 'react'
import { Settings, Wrench, PackageCheck, AlertTriangle } from 'lucide-react'

const ManufactureDashboard = () => {
  const productionLines = [
    { id: 'Line 1', product: 'Industrial Motor', status: 'Running', progress: 75, efficiency: '94%' },
    { id: 'Line 2', product: 'Control Panel', status: 'Maintenance', progress: 0, efficiency: '-' },
    { id: 'Line 3', product: 'Sensor Array', status: 'Running', progress: 45, efficiency: '88%' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manufacturing & Production</h1>
          <p className="text-gray-500 text-sm mt-1">Monitor production lines and inventory.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Update Stock
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary/20">
            New Batch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg text-primary"><Settings size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Active Lines</p>
              <h3 className="text-2xl font-bold">2/3</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg text-success"><PackageCheck size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Units Today</p>
              <h3 className="text-2xl font-bold">1,402</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-100 rounded-lg text-warning"><Wrench size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Maintenance</p>
              <h3 className="text-2xl font-bold">1 Line</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-100 rounded-lg text-danger"><AlertTriangle size={24} /></div>
            <div>
              <p className="text-sm text-gray-500">Low Stock Mat.</p>
              <h3 className="text-2xl font-bold">4 Items</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Production Lines Status</h2>
          </div>
          <div className="p-6 space-y-6">
            {productionLines.map((line, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl p-4 hover:border-primary/30 transition-colors">
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
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${line.status === 'Running' ? 'bg-primary' : 'bg-gray-300'}`} 
                      style={{ width: `${line.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Stock Alerts</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-danger/5 border border-danger/10 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Copper Wire</h4>
                  <p className="text-xs text-danger">Only 50kg left</p>
                </div>
                <button className="text-xs font-semibold text-primary hover:underline">Reorder</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-danger/5 border border-danger/10 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Steel Casings</h4>
                  <p className="text-xs text-danger">Only 120 units left</p>
                </div>
                <button className="text-xs font-semibold text-primary hover:underline">Reorder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufactureDashboard
