import { useState } from 'react';
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <SideBar isCollapsed={isSidebarCollapsed} />
      <main>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className='content'>
          <Dashboard/>
        </div>
      </main>
    </div>
  );
}

