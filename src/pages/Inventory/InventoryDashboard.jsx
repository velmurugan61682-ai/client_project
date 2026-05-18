import React from 'react';
import KpiCard from '../../components/cards/KpiCard';

const InventoryDashboard = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Warehouse & Inventory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Total Raw Material" value="45,000 kg" trend="-2%" icon="Database" />
        <KpiCard title="Finished Goods" value="12,500 kg" trend="+18%" icon="PackageCheck" />
        <KpiCard title="Critical Stock" value="2 Items" trend="+1" icon="AlertTriangle" />
      </div>

      <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Live Inventory Tracking</h3>
        <p className="text-slate-400">Inventory levels for DORB, Maize DDGS, Calcite, etc. go here.</p>
      </div>
    </div>
  );
};

export default InventoryDashboard;
