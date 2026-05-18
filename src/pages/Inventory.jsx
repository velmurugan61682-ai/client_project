import React from 'react';
import DataTableWrapper from '../components/tables/DataTableWrapper';

const columns = [
  { name: 'Item', selector: row => row.item, sortable: true },
  { name: 'Opening Stock', selector: row => row.openingStock, sortable: true },
  { name: 'Used Stock', selector: row => row.usedStock, sortable: true },
  { name: 'Remaining Stock', selector: row => row.remainingStock, sortable: true },
];

const data = [
  { id: 1, item: 'Steel', openingStock: 500, usedStock: 150, remainingStock: 350 },
  { id: 2, item: 'Plastic', openingStock: 800, usedStock: 400, remainingStock: 400 },
];

const Inventory = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100 mb-6">Inventory Management</h1>
      <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
        <DataTableWrapper columns={columns} data={data} title="Weekly Stock Report" />
      </div>
    </div>
  );
};

export default Inventory;
