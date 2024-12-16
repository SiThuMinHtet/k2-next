import styles from "@/styles/Navbar.module.scss";

export default function Navbar({ onToggleSidebar }) {
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
        <div className={styles.notification}>
          <a href="#" className={styles.notification__bell}>
            <i className="fa-solid fa-bell"></i>
            <span className={styles.notification__dot}></span>
          </a>
        </div>

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

