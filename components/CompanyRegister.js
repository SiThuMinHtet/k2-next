import React, { useState } from "react";
import styles from "../styles/InputField.module.scss";

const CompanyRegister = () => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div>
      <div className={styles.tab_btn}>
        <button
          className={`${activeTab === "register" ? styles.active : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register Information
        </button>
        <button
          className={`${activeTab === "payment" ? styles.active : ""}`}
          onClick={() => setActiveTab("payment")}
        >
          Payment Information
        </button>
      </div>

      {/* Content Section */}
      <div>
        {/* Left Section */}
        <div>
          {activeTab === "register" && (
            <div className={styles.register_container}>
              <div className={styles.leftSection}>
                <div className={styles.register_id}>
                  <label>ID: </label>
                  <div>
                    <span>10001</span>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Name: </label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Company: </label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Business Type: </label>
                  <select>
                    <option>Select</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Post Code: </label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Address: </label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone: </label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Fax: </label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.rightSection}>
                <div className={styles.register_date}>
                  <label>Register Date: </label>
                  <span>2020-10-14 16:17</span>
                </div>
                <div className={styles.inputGroup}>
                  <label>Email: </label>
                  <input type="email" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Password: </label>
                  <input type="password" />
                </div>
                <div className={styles.user_count}>
                  <label>User Count: </label>
                  <span>10</span>
                  <i class="fa-solid fa-list"></i>
                </div>
              </div>
            </div>
          )}
          {activeTab === "payment" && (
            <div className={styles.payment_container}>
              <div className={styles.left_section}>
                <div className={styles.info}>
                  <label>ID:</label>
                  <span>10001</span>
                </div>
                <div className={styles.info}>
                  <label>Name:</label>
                  <span className="highlight">SAW YE THWAY</span>
                </div>
                <div className={styles.info}>
                  <label>Company:</label>
                  <span>O-Technique</span>
                </div>
                <div className={styles.info__plan}>
                  <label>Plan:</label>
                  <div>
                    <span>Standard</span>
                    <i className="fa-solid fa-pen"></i>
                    <p>
                      年間プラン (月払い) <br />
                      2020年10月9日に自動更新されます。
                      <br />
                      5,680円 / 月<br />
                      次のお支払い予定日は2020年5月9日です。
                    </p>
                  </div>
                </div>
                <div className={styles.info}>
                  <label>Payment:</label>
                  <div>
                    <span>Credit Card</span>
                    <p>****0550 で終わる Visa</p>
                  </div>
                </div>
              </div>

              <div className={styles.right_section}>
                <table>
                  <thead>
                    <tr>
                      <th>日付</th>
                      <th>種類</th>
                      <th>お支払い金額</th>
                      <th>領収書</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2020年4月9日</td>
                      <td>請求書</td>
                      <td>6,248円</td>
                      <td>
                        <a href="#">PDF を表示</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2020年4月9日</td>
                      <td>領収書</td>
                      <td>6,248円</td>
                      <td>
                        <a href="#">PDF を表示</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2020年3月9日</td>
                      <td>領収書</td>
                      <td>6,248円</td>
                      <td>
                        <a href="#">PDF を表示</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Shared Buttons */}
      <div className={styles.register_btn}>
        <button>Cancel</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default CompanyRegister;
