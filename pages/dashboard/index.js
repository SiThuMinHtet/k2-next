import { useState } from 'react';
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

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
          <h1>hello</h1>
        </div>
      </main>
    </div>
  );
}

