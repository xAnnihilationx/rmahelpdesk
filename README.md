# RMAHelpdesk

A streamlined helpdesk solution for managing Return Merchandise Authorization (RMA) processes, built with Next.js and MongoDB.

## Overview

This application helps businesses manage the complete RMA lifecycle:
1. Track defective products returned by customers
2. Process manufacturer warranty claims
3. Manage shipping and replacement logistics
4. Monitor RMA status throughout the process

## RMA Process Flow

1. Customer reports a product failure
2. Customer provides invoice and serial number of defective part
3. We submit the manufacturer part number and receive an RMA number
4. We print a shipping label for the customer to return the part to manufacturer, Tracking number noted 
5. Manufacturer ships a replacement part directly to the customer, Tracking number noted 
6. RMA is marked as completed in the system


## RMA Status 

* Submitted - Initial report received from customer
* Verification - Gathering invoice and serial number
* Pending RMA - Awaiting manufacturer's RMA number
* RMA Approved - RMA number received from manufacturer
* Label Generated - Shipping label created and sent to customer
* In Transit to Manufacturer - Customer has shipped the item
* Received by Manufacturer - Manufacturer confirmed receipt
* Replacement Shipped - Manufacturer has sent replacement
* In Transit to Customer - Replacement on its way
* Delivered - Replacement received by customer
* Completed - Process finished successfully
* Cancelled - Process terminated (for any reason)
* On Hold - Process temporarily paused (needs additional information)

## Quick Start

### Prerequisites
- [Podman](https://podman.io/) or Docker
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xAnnihilationx/rmahelpdesk.git
   cd rmahelpdesk
   ```

2. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=mongodb://root:example@mongo:27017/rmadb?authSource=admin
   ```

3. Start the application:
   ```bash
   podman compose up -d
   ```

### Access Points

- **Next.js Application**: [http://localhost:3000/](http://localhost:3000/)
- **MongoDB Express Admin**: [http://localhost:8081/](http://localhost:8081/)

## Development Notes

- The application is currently in development mode
- MongoDB is configured with basic authentication (username: root, password: example)
- Database name: `rmadb`

## Production Deployment

Before deploying to production:
1. Configure secure MongoDB authentication
2. Set up proper security measures for the application
3. Configure Next.js for production deployment
4. Implement proper backup strategies

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

