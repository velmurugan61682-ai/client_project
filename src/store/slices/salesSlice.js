import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [
    { id: 'ORD-001', customer: 'TechCorp Inc.', product: 'Industrial Motor', amount: 4500, status: 'Completed', date: '2024-05-10' },
    { id: 'ORD-002', customer: 'Global Solutions', product: 'Control Panel', amount: 2300, status: 'Pending', date: '2024-05-11' },
    { id: 'ORD-003', customer: 'Alpha Manufacturing', product: 'Sensor Array', amount: 890, status: 'Processing', date: '2024-05-12' },
  ],
  customers: [
    { id: 'CUST-01', name: 'TechCorp Inc.', email: 'contact@techcorp.com', phone: '555-0101' },
    { id: 'CUST-02', name: 'Global Solutions', email: 'hello@globalsol.com', phone: '555-0102' },
  ],
  products: [
    { id: 'PROD-1', name: 'Industrial Motor', price: 4500 },
    { id: 'PROD-2', name: 'Control Panel', price: 2300 },
    { id: 'PROD-3', name: 'Sensor Array', price: 890 },
  ]
}

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.unshift(action.payload)
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload
      const order = state.orders.find(o => o.id === id)
      if (order) order.status = status
    }
  }
})

export const { addOrder, updateOrderStatus } = salesSlice.actions
export default salesSlice.reducer
