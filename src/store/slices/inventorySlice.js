import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rawMaterials: [
    { id: 'RM-1', name: 'Copper Wire', stock: 50, unit: 'kg', threshold: 100 },
    { id: 'RM-2', name: 'Steel Casings', stock: 120, unit: 'units', threshold: 200 },
    { id: 'RM-3', name: 'Microcontrollers', stock: 500, unit: 'units', threshold: 150 },
    { id: 'RM-4', name: 'Aluminum Sheets', stock: 850, unit: 'kg', threshold: 300 },
  ],
  finishedGoods: [
    { id: 'FG-1', name: 'Industrial Motor', stock: 24, reserved: 5 },
    { id: 'FG-2', name: 'Control Panel', stock: 12, reserved: 2 },
  ]
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    consumeMaterial: (state, action) => {
      const { id, amount } = action.payload
      const item = state.rawMaterials.find(m => m.id === id)
      if (item && item.stock >= amount) {
        item.stock -= amount
      }
    },
    restockMaterial: (state, action) => {
      const { id, amount } = action.payload
      const item = state.rawMaterials.find(m => m.id === id)
      if (item) {
        item.stock += amount
      }
    }
  }
})

export const { consumeMaterial, restockMaterial } = inventorySlice.actions
export default inventorySlice.reducer
