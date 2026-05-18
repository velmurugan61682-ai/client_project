import React from 'react';
import DataTableWrapper from '../components/tables/DataTableWrapper';

const columns = [
  { name: 'Retail Partner', selector: row => row.retailPartner, sortable: true },
  { name: 'Overall Due', selector: row => row.overallDue, sortable: true },
  { name: 'Collection', selector: row => row.collectionAmount, sortable: true },
  { name: 'Balance Due', selector: row => row.balanceDue, sortable: true },
];

const data = [
  { id: 1, retailPartner: 'Acme Corp', overallDue: 5000, collectionAmount: 2000, balanceDue: 3000 },
];

const Payments = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Payment Collections</h1>
      <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
        <DataTableWrapper columns={columns} data={data} title="Payment Collection Report" />
      </div>
    </div>
  );
};

export default Payments;
