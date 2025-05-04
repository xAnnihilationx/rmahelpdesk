import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'RMA Help Desk',
  description: 'Manage return merchandise authorization tickets efficiently',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-800 text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">RMA Help Desk</Link>
              <div>
                <Link href="/add-ticket" className="hover:underline p-8">New Ticket</Link>
                <Link href="/api/tickets" className="hover:underline p-8">View Tickets</Link>

              </div>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-blue-800 border-t">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          </div>
        </footer>
      </body>
    </html>
  );
}