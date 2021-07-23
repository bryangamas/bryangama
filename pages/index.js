import Head from "next/head";
import Header from "../components/Header";
import Home from "../components/Home";
import PageOptions from "../components/PageOptions";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Bryan Gama | Full Stack Developer</title>
        <meta name="description" content="Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <Home />
    </div>
  );
}
