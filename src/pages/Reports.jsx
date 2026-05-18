import React from 'react';

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Generated Reports</h1>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
        <p className="text-slate-300">Daily Sales, Usage, and Payment Reports will be aggregated here.</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
          Download PDF Report
        </button>
      </div>
    </div>
  );
};

export default Reports;
