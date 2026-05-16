import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lines: [
    { id: 'Line 1', product: 'Industrial Motor', status: 'Running', progress: 75, efficiency: 94 },
    { id: 'Line 2', product: 'Control Panel', status: 'Maintenance', progress: 0, efficiency: 0 },
    { id: 'Line 3', product: 'Sensor Array', status: 'Running', progress: 45, efficiency: 88 },
  ],
  wip: [
    { batchId: 'B-101', product: 'Industrial Motor', quantity: 50, stage: 'Assembly', expectedCompletion: '2024-05-20' },
    { batchId: 'B-102', product: 'Sensor Array', quantity: 200, stage: 'Testing', expectedCompletion: '2024-05-18' },
  ]
}

const productionSlice = createSlice({
  name: 'production',
  initialState,
  reducers: {
    updateLineStatus: (state, action) => {
      const { id, status, progress } = action.payload
      const line = state.lines.find(l => l.id === id)
      if (line) {
        if(status) line.status = status
        if(progress !== undefined) line.progress = progress
      }
    },
    addWipBatch: (state, action) => {
      state.wip.push(action.payload)
    }
  }
})

export const { updateLineStatus, addWipBatch } = productionSlice.actions
export default productionSlice.reducer
