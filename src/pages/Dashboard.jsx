import React from 'react';
import KpiCard from '../components/cards/KpiCard';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Overview Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard title="Total Sales" value="$45,231" trend="+12%" icon="DollarSign" />
        <KpiCard title="Total Usage" value="1,200 kg" trend="-5%" icon="Package" />
        <KpiCard title="Payments Due" value="$12,050" trend="+2%" icon="CreditCard" />
        <KpiCard title="Production" value="340 Units" trend="+18%" icon="Activity" />
      </div>
    </div>
  );
};

export default Dashboard;
