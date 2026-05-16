import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MoreVertical } from 'lucide-react'

const RevenueChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Revenue vs Target</h2>
        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={20} /></button>
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorTar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="revenue" stroke="#1D4ED8" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
            <Area type="monotone" dataKey="target" stroke="#22C55E" strokeWidth={3} fillOpacity={1} fill="url(#colorTar)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart
