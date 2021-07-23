import About from "@components/home/About";
import Hero from "@components/home/Hero";
import Layout from "@components/Layout";

export default function MainPage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
