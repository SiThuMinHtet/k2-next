import { useState } from "react";
import SideBar from "@/components/ui/SideBar";
import Navbar from "@/components/ui/Navbar";
import ActivityTable from "@/components/lists/ActivityList";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <SideBar isCollapsed={isSidebarCollapsed}  setIsSidebarCollapsed={setIsSidebarCollapsed}/>
      <main>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className='content'>
         
    <ActivityTable/>
     

        </div>
      </main>
    </div>
  );
}
