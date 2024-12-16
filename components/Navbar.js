function Navbar() {
    return (
        <div>
            <header className="header">
                <button className="header__toggle" aria-label="Toggle Sidebar" id="sidebarToggle">
                    <span></span>
                </button>

                <div className="header__items">
                    <a href="">
                        <i className="fa-solid fa-bell"></i>
                    </a>

                    <div className="noti__dropdown">
                        <div className="noti__item">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Admin</span>
                            </div>
                            <div className="noti__item__inner">
                                <p>Create Admin</p>
                                <span className="action"> Htet Khaing</span>
                            </div>
                        </div>
                        <div className="noti__item">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Admin</span>
                            </div>
                            <div>
                                <p>Delete Admin</p>
                                <span className="action"> BBBBB</span>
                            </div>
                        </div>
                        <div className="noti__item">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Lwi Htet</span>
                            </div>
                            <div className="noti__item__inner">
                                <p>Add Company</p>
                                <span className="action"> Lwin Htet Co.ltd</span>
                            </div>
                        </div>
                        <div className="noti__item">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Ei Ei</span>
                            </div>
                            <div className="noti__item__inner">
                                <p>Disable Login</p>
                                <span className="action"> CCCC</span>
                            </div>
                        </div>
                        <div className="noti__item login__noti">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Ei Ei</span>
                            </div>
                            <p>
                                <span className="action">Log-in</span>
                            </p>
                        </div>
                        <div className="noti__item logout__noti">
                            <div className="noti__item__inner">
                                <p>2020-10-01 10:15 </p>
                                <span className="role">Mya Mya</span>
                            </div>
                            <p>
                                <span className="action">Log-out</span>
                            </p>
                        </div>
                        <div className="view-all">
                            <p>View All Notifications</p>
                        </div>
                    </div>

                    <div className="header__items__users">
                        <a href="" className="admin__setting">
                            <i className="fa-solid fa-user-gear"></i>
                        </a>

                        <div className="admin__setting__dropdown">
                            <div className="admin__item">
                                <img src="./img/user_shield_logo.svg" alt="" />
                                <p>System Admin List</p>
                            </div>
                            <div className="admin__item">
                                <img src="img/credit_card_logo.svg" alt="" />
                                <p>Plan & Payment</p>
                            </div>
                            <div className="admin__item">
                                <img src="img/paint_logo.svg" alt="" />
                                <p>Theme Style</p>
                            </div>
                        </div>

                        <a href="" className="header__username">
                            <div>
                                <h3>Abbott Keitch</h3>
                                <p>Admin</p>
                            </div>
                            <i className="fa-regular fa-circle-user"></i>
                        </a>
                        <div className="profile__setting__dropdown">
                            <div className="profile__item">
                                <img src="./img/chat_logo.svg" alt="" />
                                <p>Inbox</p>
                            </div>
                            <div className="profile__item">
                                <img src="img/wallet_logo.svg" alt="" />
                                <p>Account</p>
                            </div>
                            <div className="profile__item">
                                <img src="img/power_logo.svg" alt="" />
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
