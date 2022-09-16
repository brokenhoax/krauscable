import styles from "./user.module.css";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../components/logo/logo.js";

export default function User() {
  return (
    <Layout>
      <Logo></Logo>
      <section className={"section"}>
        <h1 className={styles.header}>Account Management</h1>
        {/* User */}
        <div className={styles.section}>
          <div className={styles.primary}>
            <h2>User</h2>
            <div className={"secondary-small"}>Change Password</div>
          </div>
          <div className="primary-text">brokenhoax</div>
        </div>
        {/* Subscription */}
        <div className={styles.section}>
          <div className={styles.primary}>
            <h2>Subscription</h2>
            <div className={"secondary-small"}>Change Subscription</div>
          </div>
          <div className="primary-text">Kraus Triple Play</div>
          <ul className={styles.list}>
            <li>Cable (HBO, Cinemax)</li>
            <li>Phone (Residential)</li>
            <li>Internet (Pro Gamer)</li>
          </ul>
        </div>
        {/* Balance Due */}
        <div className={styles.section}>
          <div className={styles.primary}>
            <h2>Balance Due</h2>
            <div className={"secondary-small"}>Pay Bill Online</div>
          </div>
          <div className={`primary-text ${styles.primary}`}>
            <div>August 31st, 2022</div>
            <div>-$120</div>
          </div>
        </div>
        <div className={"divider"}></div>
        {/* Account Activity */}
        <h1 className={styles.header}>Account Activity</h1>
        {/* Payment History */}
        <h2>Payment History</h2>
        <ol className={styles.list}>
          <li className="flex-between">
            <div>July 31, 2022</div>
            <div>$125</div>
          </li>
          <li className="flex-between">
            {" "}
            <div>June 30, 2022</div>
            <div>$125</div>
          </li>
          <li className="flex-between">
            {" "}
            <div>May 31, 2022</div>
            <div>$125</div>
          </li>
          <li className="flex-between">
            {" "}
            <div>April 30, 2022</div>
            <div>$125</div>
          </li>
        </ol>
        <div className="quote">
          Best decision I made was to switch to Kraus internet. I had AT&T and
          for the same price with Kraus my speeds are 10x faster than AT&T.
          <span>— Tim P.</span>
        </div>
      </section>
      <Navbar></Navbar>
    </Layout>
  );
}
