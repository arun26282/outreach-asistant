import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';

function DashboardLayout({ children }: { children: React.ReactNode }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 flex flex-col overflow-hidden">
                {children}
            </main>
        </div>
    </div>
  );
}

export default DashboardLayout
