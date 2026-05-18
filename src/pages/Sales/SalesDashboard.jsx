import React from 'react';
import KpiCard from '../../components/cards/KpiCard';

const SalesDashboard = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Sales Hub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Today's Sales" value="₹125,000" trend="+15%" icon="TrendingUp" />
        <KpiCard title="Invoices Generated" value="34" trend="+5" icon="FileText" />
        <KpiCard title="Pending Payments" value="₹85,000" trend="-10%" icon="AlertCircle" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              New Sale Entry
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
              Record Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
