import React from 'react';
import KpiCard from '../../components/cards/KpiCard';

const ManufactureDashboard = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Manufacturing Workspace</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Active Batches" value="12" trend="+2" icon="Activity" />
        <KpiCard title="DORB Consumed" value="4,500 kg" trend="-5%" icon="Package" />
        <KpiCard title="Efficiency Rate" value="94%" trend="+1.2%" icon="CheckCircle" />
      </div>

      <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Live Batch Processing</h3>
        <p className="text-slate-400">Production tracking and auto-deduction interfaces go here.</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Start New Batch
        </button>
      </div>
    </div>
  );
};

export default ManufactureDashboard;
