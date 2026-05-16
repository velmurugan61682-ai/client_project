import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { MoreVertical } from 'lucide-react'

const COLORS = ['#1D4ED8', '#22C55E', '#F97316', '#EF4444'];

const ProductionPieChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Production Output</h2>
        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={20} /></button>
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProductionPieChart
