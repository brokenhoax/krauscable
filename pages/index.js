import Head from "next/head";
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
      <main>
        <Kraus></Kraus>
      </main>
    </div>
  );
}
