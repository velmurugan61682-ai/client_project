import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  metrics: {
    totalUsers: 1245,
    monthlyRevenue: 84200,
    activeOrders: 142,
    criticalIssues: 3,
  },
  revenueData: [
    { name: 'Jan', revenue: 4000, target: 2400 },
    { name: 'Feb', revenue: 3000, target: 1398 },
    { name: 'Mar', revenue: 2000, target: 9800 },
    { name: 'Apr', revenue: 2780, target: 3908 },
    { name: 'May', revenue: 1890, target: 4800 },
    { name: 'Jun', revenue: 2390, target: 3800 },
  ],
  productionData: [
    { name: 'Motor', value: 400 },
    { name: 'Panel', value: 300 },
    { name: 'Sensor', value: 300 },
    { name: 'Valve', value: 200 },
  ],
  users: [
    { id: 'U-1', name: 'Alice Smith', role: 'Admin', status: 'Active' },
    { id: 'U-2', name: 'Bob Jones', role: 'Sales', status: 'Active' },
    { id: 'U-3', name: 'Charlie Day', role: 'Manufacture', status: 'Inactive' },
  ]
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
})

export default dashboardSlice.reducer
