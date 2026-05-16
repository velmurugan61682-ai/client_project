import React from 'react'
import DataTable from 'react-data-table-component'
import { Search } from 'lucide-react'

const DataTableWrapper = ({ title, columns, data, filterText, onFilterChange, placeholder = "Search..." }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder={placeholder}
            value={filterText}
            onChange={onFilterChange}
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
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
  )
}

export default DataTableWrapper
