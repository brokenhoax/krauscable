import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.png"
        alt="kraus logo"
        width={130}
        height={70}
        priority
      />
    </div>
  );
}
