import About from "@components/home/About";
import Hero from "@components/home/Hero";
import Projects from "@components/home/Projects";
import Layout from "@components/Layout";
import locales from "../locales";

export default function MainPage({ content }) {
  const { navData, heroData, aboutData, projectsData } = content;

  return (
    <Layout navData={navData}>
      <Hero heroData={heroData} />
      <About aboutData={aboutData} />
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
