import { useState } from "react";
import styles from "@/styles/Sidebar.module.scss";

export default function SideBar({ isCollapsed }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSubMenu = (menu) => {
    if (!isCollapsed) {
      setActiveSubMenu(activeSubMenu === menu ? null : menu);
    }
  };

  const handleMouseEnter = (menu) => {
    if (isCollapsed) {
      setHoveredItem(menu);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      setHoveredItem(null);
    }
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebar__logo}>
        <i className="fa-solid fa-k"></i>
        {!isCollapsed && (
          <h5>
            Kanko-Knari <br />
            <span className={styles.adminText}>Admin Panel</span>
          </h5>
        )}
      </div>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.navlist}>
          <li className={styles.navlist__item}>
            <a href="#" className={styles.navlist__link}>
              <i className="fa-solid fa-table"></i>
              {!isCollapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li
            className={`${styles.navlist__item} ${
              activeSubMenu === "company" ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={styles.navlist__link}
              onClick={() => toggleSubMenu("company")}
            >
              <i className="fa-solid fa-building"></i>
              {!isCollapsed && (
                <>
                  <span>Company</span>
                  <i
                    className={`fa-solid fa-chevron-down ${styles.chevron} ${
                      activeSubMenu === "company" ? styles.open : ""
                    }`}
                  ></i>
                </>
              )}
            </div>
            {((activeSubMenu === "company" && !isCollapsed) || 
              (hoveredItem === "company" && isCollapsed)) && (
              <ul className={`${styles.submenu} ${isCollapsed ? styles.floating : ''}`}>
                {isCollapsed && (
                  <li className={styles.submenu__header}>Company</li>
                )}
                <li className={styles.submenu__item}>
                  <a href="#" className={styles.submenu__link}>
                    User List
                  </a>
                </li>
                <li className={styles.submenu__item}>
                  <a href="#" className={styles.submenu__link}>
                    Access Log
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navlist__item}>
            <a href="#" className={styles.navlist__link}>
              <i className="fa-solid fa-credit-card"></i>
              {!isCollapsed && <span>Payment List</span>}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

