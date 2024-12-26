import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Navbar.module.scss";

export default function Navbar({ onToggleSidebar }) {
  const [isNotificationDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);
  const [isAdminDropdownVisible, setIsAdminDropdownVisible] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsAdminDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  const handleToggleNotificationDropdown = (e) => {
    e.preventDefault();
    setIsNotificationDropdownVisible((prev) => !prev); // Toggle notification dropdown
  };

  const handleToggleProfileDropdown = (e) => {
    e.preventDefault();
    setIsProfileDropdownVisible((prev) => !prev); // Toggle profile dropdown
  };

  const handleClickOutside = (e) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setIsNotificationDropdownVisible(false); // Close notification dropdown if clicked outside
    }
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      setIsProfileDropdownVisible(false); // Close profile dropdown if clicked outside
    }
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsAdminDropdownVisible(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <button
        className={styles.header__toggle}
        aria-label="Toggle Sidebar"
        id="sidebarToggle"
        onClick={onToggleSidebar}
      >
        <span></span>
      </button>

      <div className={styles.header__items}>
        {/* Notification Dropdown */}
        <div className={styles.notification} ref={notificationRef}>
          <a
            href="#"
            className={styles.notification__bell}
            onClick={handleToggleNotificationDropdown}
          >
            <i className="fa-solid fa-bell"></i>
            <span className={styles.notification__dot}></span>
          </a>
          {isNotificationDropdownVisible && (
            <div className={styles.dropdown}>
              <ul className={styles.dropdown__list}>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Admin</strong>
                  <p>Create Admin - Htet Khaing</p>
                </li>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Admin</strong>
                  <p>Delete Admin - BBBBB</p>
                </li>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Lwi Htet</strong>
                  <p>Add Company - Lwin Htet Co.ltd</p>
                </li>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Ei Ei</strong>
                  <p>Disable Login - CCCC</p>
                </li>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Ei Ei</strong>
                  <p className={styles.login}>Log-in</p>
                </li>
                <li>
                  <span>2020-10-01 10:15</span>
                  <strong>Mya Mya</strong>
                  <p className={styles.logout}>Log-out</p>
                </li>
              </ul>
              <a href="#" className={styles.viewAll}>
                View All Notifications
              </a>
            </div>
          )}
        </div>

        <div className={styles.admin} ref={dropdownRef}>
          <a
            href="#"
            className={styles.admin_icon}
            onClick={handleToggleDropdown}
          >
            <i className="fa-solid fa-user-gear"></i>
          </a>
          {isAdminDropdownVisible && (
            <div className={styles.dropdown}>
              <ul className={styles.dropdown__list}>
                <li>
                  <i className="fa-solid fa-users"></i> System Admin List
                </li>
                <li>
                  <i className="fa-solid fa-wallet"></i> Plan & Payment
                </li>
                <li>
                  <i className="fa-solid fa-palette"></i> Theme Style
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className={styles.profile} ref={profileRef}>
          <a
            href="#"
            className={styles.viewAll}
            onClick={handleToggleProfileDropdown}
          >
            <div className={styles.profile__details}>
              <h3>Abbott Keitch</h3>
              <p>Admin</p>
            </div>
          </a>
          <img
            src="img/user_avatar.png"
            alt="Admin Avatar"
            className={styles.profile__avatar}
          />
          {isProfileDropdownVisible && (
            <div className={styles.dropdown}>
              <ul className={styles.dropdown__list}>
                <li>
                  <i className="fa-solid fa-envelope"></i> Inbox
                </li>
                <li>
                  <i className="fa-solid fa-wallet"></i> Account
                </li>
                <li>
                  <i className="fa-solid fa-power-off"></i> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
