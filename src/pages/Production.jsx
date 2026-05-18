import React from 'react';
import DataTableWrapper from '../components/tables/DataTableWrapper';

const columns = [
  { name: 'Batch No', selector: row => row.batchNo, sortable: true },
  { name: 'Finished Goods', selector: row => row.finishedGoods, sortable: true },
  { name: 'Wastage', selector: row => row.wastage, sortable: true },
  { name: 'Date', selector: row => row.productionDate, sortable: true },
];

const data = [
  { id: 1, batchNo: 'B-1001', finishedGoods: 150, wastage: 5, productionDate: '2026-05-17' },
];

const Production = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Manufacture Production</h1>
      <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
        <DataTableWrapper columns={columns} data={data} title="Production Tracking" />
      </div>
    </div>
  );
};

export default Production;
