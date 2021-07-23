import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Home from "../components/Home";
import Layout from "../components/Layout";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <Home />
      <About />
    </Layout>
  );
}
