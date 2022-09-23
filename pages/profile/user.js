import styles from "./user.module.css";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../components/logo/logo.js";

export default function User() {
  return (
    <>
      <section className="pb-128">
        <h1>Account Management</h1>
        {/* User */}
        <div className={styles.section}>
          <div className={"space-between"}>
            <h2>User</h2>
            <div className={"link"}>Change Password</div>
          </div>
          <h3>brokenhoax</h3>
        </div>
        {/* Subscription */}
        <div className={styles.section}>
          <div className={"space-between"}>
            <h2>Subscription</h2>
            <div className={"link"}>Change Subscription</div>
          </div>
          <h3>Kraus Triple Play</h3>
          <ul className={"list"}>
            <li>Cable (HBO, Cinemax)</li>
            <li>Phone (Residential)</li>
            <li>Internet (Pro Gamer)</li>
          </ul>
        </div>
        {/* Balance Due */}
        <div className={styles.section}>
          <div className={"space-between"}>
            <h2>Balance Due</h2>
            <div className={"link"}>Pay Bill Online</div>
          </div>
          <div className={"space-between"}>
            <div>August 31st, 2022</div>
            <div>-$120</div>
          </div>
        </div>
        <div className={"divider"}></div>
        {/* Account Activity */}
        <h1>Account Activity</h1>
        <div className={styles.section}>
          {/* Payment History */}
          <div className={"space-between"}>
            <h2>Payment History</h2>
          </div>
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
          <div className={"divider"}></div>
          <h1>Reviews</h1>
          <div className={styles.section}>
            <p className="quote">
              Best decision I made was to switch to Kraus internet. I had AT&T
              and for the same price with Kraus my speeds are 10x faster than
              AT&T.
              <span> &nbsp; — Tim P.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
