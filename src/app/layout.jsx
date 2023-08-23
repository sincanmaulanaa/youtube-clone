import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YouTube',
  description: 'YouTube by Google',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen bg-zinc-900 text-white relative'>
          <Navbar />
          <div className='flex relative'>
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
