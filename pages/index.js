import MainLayout from "@/components/MainLayout";
import LoginForm from "@/components/LoginForm";
// import { LoginProvider } from "@/contexts/LoginContext.js";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.loginContainer}>
        <div className={styles.loginPage}>
          <div className={styles.loginPageFlex}>
            <div className={styles.loginPageText}>
              <h1>建工管理システム</h1>
              <h1 className={styles.chgColor}>管理パネル</h1>
              <p>For Web Applications, CRM, SFS, Admin Panels and more.</p>
            </div>
          </div>
        </div>
        <div className={styles.box}></div>
        <LoginForm />
      </div>
    </MainLayout>
  );
}
