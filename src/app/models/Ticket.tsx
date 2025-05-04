import mongoose from 'mongoose';

// Define the schema
const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: [true, 'Ticket number is required'],
    unique: true,
    trim: true,
  },
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
  },
  productName: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  issue: {
    type: String,
    required: [true, 'Issue description is required'],
  },

  invoice: {
    type: String,
    required: [true, 'Invoice number is required'],
    trim: true,
  },

  manufaturerTracking: {
    type: String,
    trim: true,
  },

  customerTracking: {
    type: String,
    trim: true,
  },
  manufacturerRMA: {
    type: String,
    trim: true,
  },
  
  status: {
    type: String,
    enum: [
      'submitted',           // Initial report received
      'verification',        // Gathering documentation
      'pending-rma',         // Awaiting manufacturer's RMA number
      'rma-approved',        // RMA number received
      'label-generated',     // Shipping label created
      'in-transit-to-mfg',   // En route to manufacturer 
      'received-by-mfg',     // At manufacturer
      'replacement-shipped', // Replacement sent
      'in-transit-to-customer', // Replacement en route
      'delivered',           // Replacement received by customer
      'completed',           // Process finished successfully
      'cancelled',           // Process terminated
      'on-hold'              // Process paused
    ],
    default: 'submitted',
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closedDate: {
    type: Date,
  },
  notes: {
    type: String,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

// Create and export the model
export default mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);