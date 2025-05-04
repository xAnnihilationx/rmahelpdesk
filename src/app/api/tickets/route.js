import { NextResponse } from 'next/server';
import Ticket from '@/app/models/Ticket';
import dbconnect from '@/app/lib/mongodb';

// GET all tickets
export async function GET(request) {
  try {
    await dbconnect();
    
    // Get sort parameters from URL
    const { searchParams } = new URL(request.url);
    const sortField = searchParams.get('sortField') || 'openDate';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    
    // Create sort object
    const sort = {};
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const tickets = await Ticket.find({}).sort(sort);
    
    return NextResponse.json({ success: true, data: tickets });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tickets' },
      { status: 500 }
    );
  }
}

// POST new ticket
export async function POST(request) {
  try {
    await dbconnect();
    
    const data = await request.json();
    
    // Generate ticket number if not provided
    if (!data.ticketNumber) {
      const date = new Date();
      const prefix = 'RMA';
      const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      data.ticketNumber = `${prefix}-${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${randomDigits}`;
    }
    
    const ticket = await Ticket.create(data);
    
    return NextResponse.json({ success: true, data: ticket }, { status: 201 });
  } catch (error) {
    console.error('Error creating ticket:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create ticket' },
      { status: 400 }
    );
  }
}