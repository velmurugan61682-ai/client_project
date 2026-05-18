import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  metrics: {
    totalRevenue: 1250000,
    productionVolume: 45000,
    pendingCollections: 85000,
    lowStockAlerts: 4,
  },
  revenueData: [
    { name: 'Mon', revenue: 40000, target: 45000 },
    { name: 'Tue', revenue: 30000, target: 45000 },
    { name: 'Wed', revenue: 55000, target: 45000 },
    { name: 'Thu', revenue: 27800, target: 45000 },
    { name: 'Fri', revenue: 48900, target: 45000 },
    { name: 'Sat', revenue: 63900, target: 45000 },
  ],
  productionData: [
    { name: 'Poultry Feed A', value: 4000 },
    { name: 'Cattle Feed B', value: 3000 },
    { name: 'Aqua Feed C', value: 3000 },
    { name: 'Swine Feed D', value: 2000 },
  ],
  usageData: [
    { name: 'DORB', value: 12000 },
    { name: 'Maize DDGS', value: 8000 },
    { name: 'Rice Bran', value: 5000 },
    { name: 'Molasses', value: 3000 },
  ],
  retailers: [
    { id: 'R-1', name: 'Agri Supplies Co.', role: 'Distributor', status: 'Active' },
    { id: 'R-2', name: 'Farm Direct', role: 'Retailer', status: 'Active' },
    { id: 'R-3', name: 'Valley Feeds', role: 'Wholesaler', status: 'Inactive' },
  ]
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
})

export default dashboardSlice.reducer
