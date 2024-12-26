
import { useState } from 'react';
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import CompanyList from "@/components/CompanyList";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <SideBar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
      <main>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className='content'>
         

      <CompanyList></CompanyList>

        </div>
      </main>
    </div>
  );
}

