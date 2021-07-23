import About from "@components/home/About";
import Hero from "@components/home/Hero";
import Layout from "@components/Layout";
import locales from "../locales";

export default function MainPage({ content }) {
  const { heroData, aboutData } = content;

  return (
    <Layout>
      <Hero heroData={heroData} />
      <About aboutData={aboutData} />
    </Layout>
  );
}

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      content: locales[locale],
    },
  };
};
