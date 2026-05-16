import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateLineStatus } from '../../store/slices/productionSlice'
import { toast } from 'react-hot-toast'

const ProductionUpdateForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const dispatch = useDispatch()
  const lines = useSelector(state => state.production.lines)

  const onSubmit = (data) => {
    dispatch(updateLineStatus({
      id: data.line,
      status: data.status,
      progress: Number(data.progress)
    }))
    toast.success('Production line updated successfully!')
    reset()
    if(onClose) onClose()
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Update Production Line</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Production Line</label>
          <select 
            {...register('line', { required: 'Line is required' })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="">Select Line</option>
            {lines.map(l => <option key={l.id} value={l.id}>{l.id} - {l.product}</option>)}
          </select>
          {errors.line && <span className="text-xs text-danger mt-1">{errors.line.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select 
            {...register('status', { required: 'Status is required' })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="">Select Status</option>
            <option value="Running">Running</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Stopped">Stopped</option>
          </select>
          {errors.status && <span className="text-xs text-danger mt-1">{errors.status.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Progress (%)</label>
          <input 
            type="number"
            min="0"
            max="100"
            {...register('progress', { required: 'Progress is required', min: 0, max: 100 })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
          {errors.progress && <span className="text-xs text-danger mt-1">{errors.progress.message}</span>}
        </div>

        <div className="pt-4 flex space-x-3">
          {onClose && <button type="button" onClick={onClose} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50">Cancel</button>}
          <button type="submit" className="flex-1 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 shadow-md shadow-primary/20">Update Line</button>
        </div>
      </form>
    </div>
  )
}

export default ProductionUpdateForm
