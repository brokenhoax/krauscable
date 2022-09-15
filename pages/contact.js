import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Logo from "../components/logo/logo.js";

export default function Home() {
  return (
    <Layout>
      <Logo></Logo>
      <Navbar></Navbar>
    </Layout>
  );
}
