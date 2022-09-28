import styles from "./user.module.css";

export default function User() {
  return (
    <>
      <section>
        <h1>Account Management</h1>
        {/* User */}
        <div className="pt-24">
          <div className={"space-between"}>
            <h2>User</h2>
            <div className={"link"}>Change Password</div>
          </div>
          <h3>brokenhoax</h3>
        </div>
        {/* Subscription */}
        <div className="pt-24">
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
        <div className="pt-24">
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
        <div className="pt-24">
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
          <div className="pt-24">
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
