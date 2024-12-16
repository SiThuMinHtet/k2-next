import Image from "next/image";
import styles from "@/styles/LoginForm.module.scss";
import InputField from "./InputField.js";
export default function LoginForm() {
  // const { login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await login(formData.get("email"), formData.get("password"));
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormBox}>
        <Image
          src="/images/login/logo.png"
          alt="K2 Logo"
          width={80}
          height={70}
          className={styles.mainLogo}
        />
        <form onSubmit={handleSubmit} className={styles.loginFormBox}>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            icon="fa-envelope"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            icon="fa-lock"
          />

          <button type="submit" className={styles.loginBtn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
