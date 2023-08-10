import styles from "./layout.module.css";
import Navbar from "./navbar/navbar";
import Logo from "./logo/logo";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Logo className="logo"></Logo>
      <div className="main">{children}</div>
      <Navbar className="navbar"></Navbar>
    </div>
  );
}
