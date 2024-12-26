
import { useState } from 'react';
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <SideBar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <main>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className='content'>
         

      <UserList></UserList>

        </div>
      </main>
    </div>
  );
}

