import React from 'react'

const KpiCard = ({ title, value, icon, trend, colorClass }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-xl ${colorClass}`}>
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-semibold px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-500 text-sm mt-1">{title}</p>
      </div>
    </div>
  )
}

export default KpiCard
