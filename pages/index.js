import Head from "next/head";
import Header from "../components/Header";
import PageOptions from "../components/PageOptions";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bryan Gama</title>
        <meta name="description" content="Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageOptions />
    </div>
  );
}
