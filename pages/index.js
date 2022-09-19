import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "../styles/Home.module.css";
import Logo from "../components/logo/logo.js";
import Navbar from "../components/navbar/navbar.js";
import Kraus from "./about/kraus.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kraus Cable</title>
        <meta
          name="Kraus Cable TV"
          content="Unofficial Website for Kraus Cable TV"
        />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="theme-color" content="#e4e4e7"></meta>
        <link rel="manifest" href="/krauscable/manifest.json"></link>
      </Head>

      <main className="wrapper">
        <div className="logo">
          <Logo></Logo>
        </div>
        <Kraus></Kraus>
        <Navbar></Navbar>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
