import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import salesReducer from './slices/salesSlice'
import productionReducer from './slices/productionSlice'
import inventoryReducer from './slices/inventorySlice'
import dashboardReducer from './slices/dashboardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sales: salesReducer,
    production: productionReducer,
    inventory: inventoryReducer,
    dashboard: dashboardReducer,
  },
})
