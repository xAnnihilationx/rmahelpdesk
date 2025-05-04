
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TicketForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    customerName: '',
    productName: '',
    invoice: '',
    manufaturerTracking: '',
    customerTracking: '',
    manufactureRMA: '',
    issue: '',
    status: 'submitted',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validate form
      if (!formData.customerName || !formData.productName || !formData.issue) {
        throw new Error('Please fill in all required fields');
      }

      // Submit to API
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create ticket');
      }

      // Redirect to tickets list on success
      router.push('/');
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New RMA Ticket</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium  text-white mb-1">
            Customer Name *
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label htmlFor="productName" className="block text-sm font-medium  text-white mb-1">
            Product Name *
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label htmlFor="issue" className="block text-sm font-medium  text-white mb-1">
            Issue Description *
          </label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
            <label htmlFor="invoice" className="block text-sm font-medium  text-white mb-1">
                Invoice Number
            </label>
            <input 
                type="text"
                id="invoice"
                name="invoice"
                value={formData.invoice}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label htmlFor="manufactureTracking" className="block text-sm font-medium  text-white mb-1">
                Manufacturer Tracking Number    
            </label>
            <input
                type="text"
                id="manufactureTracking"
                name="manufactureTracking"
                value={formData.manufactureTracking}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
        
            />
        </div>
        <div>
            <label htmlFor="customerTracking" className="block text-sm font-medium  text-white mb-1">
                Customer Tracking Number
            </label>
            <input
                type="text"
                id="customerTracking"
                name="customerTracking"
                value={formData.customerTracking}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label htmlFor="manufactureRMA" className="block text-sm font-medium  text-white mb-1">
                Manufacturer RMA Number
            </label>
            <input
                type="text"
                id="manufactureRMA"
                name="manufactureRMA"
                value={formData.manufactureRMA}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-white mb-1">
            Status
          </label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
      >
        <option value="submitted">Submitted - Initial report received</option>
        <option value="verification">Verification - Gathering documentation</option>
        <option value="pending-rma">Pending RMA - Awaiting manufacturer's RMA number</option>
        <option value="rma-approved">RMA Approved - RMA number received</option>
        <option value="label-generated">Label Generated - Shipping label created</option>
        <option value="in-transit-to-mfg">In Transit to Manufacturer</option>
        <option value="received-by-mfg">Received by Manufacturer</option>
        <option value="replacement-shipped">Replacement Shipped</option>
        <option value="in-transit-to-customer">In Transit to Customer</option>
        <option value="delivered">Delivered - Received by customer</option>
        <option value="completed">Completed - Process finished</option>
        <option value="cancelled">Cancelled - Process terminated</option>
        <option value="on-hold">On Hold - Process paused</option>
      </select>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium  text-white mb-1">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isSubmitting ? 'Creating...' : 'Create Ticket'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;