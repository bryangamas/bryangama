import About from "@components/home/About";
import Hero from "@components/home/Hero";
import Projects from "@components/home/Projects";
import Layout from "@components/Layout";
import locales from "../locales";

export default function MainPage({ content }) {
  const { navData, heroData, aboutData, projectsData, mainTools, fullTools } =
    content;

  return (
    <Layout navData={navData}>
      <Hero heroData={heroData} mainTools={mainTools} />
      <About aboutData={aboutData} fullTools={fullTools} />
      <Projects projectsData={projectsData} />
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
