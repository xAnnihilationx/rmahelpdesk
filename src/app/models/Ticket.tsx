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
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved', 'closed'],
    default: 'open',
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