import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <form action="/send-data-here" method="post" className={styles.form}>
        <div className="mb-32">
          <label for="first">Username</label>
          <input
            className="text-input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
          />
        </div>
        <div className="mt-32">
          <label for="last">Password</label>
          <input
            className="text-input"
            type="text"
            id="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="button-primary mt-16">Submit</button>
      </form>
    </div>
  );
}
