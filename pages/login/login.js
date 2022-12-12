import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div>
      <form action="/send-data-here" method="post" className="flex-col">
        <label for="first">Username</label>
        <input
          className="text-input"
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
        />
        <label for="last">Password</label>
        <input
          className="text-input"
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <button className="button-primary mt-16">Submit</button>
      </form>
    </div>
  );
}
