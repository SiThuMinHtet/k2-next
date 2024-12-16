import styles from "@/styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Sidebar Toggle */}
      <button
        className={styles.header__toggle}
        aria-label="Toggle Sidebar"
        id="sidebarToggle"
      >
        <span></span>
      </button>

      {/* Header Items */}
      <div className={styles.header__items}>
        {/* Notification Bell */}
        <div className={styles.notification}>
          <a href="#" className={styles.notification__bell}>
            <i className="fa-solid fa-bell"></i>
            <span className={styles.notification__dot}></span>
          </a>
        </div>

        {/* User Profile */}
        <div className={styles.profile}>
          <div className={styles.profile__details}>
            <h3>Abbott Keitch</h3>
            <p>Admin</p>
          </div>
          <img
            src="img/user_avatar.png"
            alt="Admin Avatar"
            className={styles.profile__avatar}
          />
        </div>
      </div>
    </header>
  );
}
