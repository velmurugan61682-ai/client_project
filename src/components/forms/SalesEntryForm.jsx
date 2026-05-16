import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../../store/slices/salesSlice'
import { toast } from 'react-hot-toast'

const SalesEntryForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const dispatch = useDispatch()
  const products = useSelector(state => state.sales.products)
  const customers = useSelector(state => state.sales.customers)

  const onSubmit = (data) => {
    const selectedProduct = products.find(p => p.id === data.product)
    const selectedCustomer = customers.find(c => c.id === data.customer)
    
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      customer: selectedCustomer?.name || 'Walk-in',
      product: selectedProduct?.name || 'Custom',
      amount: selectedProduct ? selectedProduct.price * data.quantity : 0,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    }
    
    dispatch(addOrder(newOrder))
    toast.success('Order created successfully!')
    reset()
    if(onClose) onClose()
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6">New Sales Order</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
          <select 
            {...register('customer', { required: 'Customer is required' })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="">Select Customer</option>
            {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          {errors.customer && <span className="text-xs text-danger mt-1">{errors.customer.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
          <select 
            {...register('product', { required: 'Product is required' })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="">Select Product</option>
            {products.map(p => <option key={p.id} value={p.id}>{p.name} - ${p.price}</option>)}
          </select>
          {errors.product && <span className="text-xs text-danger mt-1">{errors.product.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input 
            type="number"
            min="1"
            {...register('quantity', { required: 'Quantity is required', min: 1 })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
          {errors.quantity && <span className="text-xs text-danger mt-1">{errors.quantity.message}</span>}
        </div>

        <div className="pt-4 flex space-x-3">
          {onClose && <button type="button" onClick={onClose} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50">Cancel</button>}
          <button type="submit" className="flex-1 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 shadow-md shadow-primary/20">Submit Order</button>
        </div>
      </form>
    </div>
  )
}

export default SalesEntryForm
