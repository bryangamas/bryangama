import About from "@components/home/About";
import Contact from "@components/home/Contact";
import Hero from "@components/home/Hero";
import Projects from "@components/home/Projects";
import Layout from "@components/Layout";
import locales from "../locales";

export default function MainPage({ content }) {
  const {
    navData,
    heroData,
    aboutData,
    projectsData,
    contactData,
    footerData,
    mainTools,
    fullTools,
  } = content;

  return (
    <Layout navData={navData} footerData={footerData}>
      <Hero heroData={heroData} mainTools={mainTools} />
      <About aboutData={aboutData} fullTools={fullTools} />
      <Projects projectsData={projectsData} />
      <Contact contactData={contactData} />
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
