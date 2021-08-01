import About from "@components/home/About";
import Contact from "@components/home/Contact";
import Hero from "@components/home/Hero";
import Projects from "@components/home/Projects";
import Layout from "@components/layout";
import HomeMeta from "@components/meta/HomeMeta";
import Head from "next/head";
import locales from "../locales";

export default function HomePage({ content }) {
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
    <>
      <Head>
        <HomeMeta />
      </Head>
      <Layout navData={navData} footerData={footerData}>
        <Hero heroData={heroData} mainTools={mainTools} />
        <About aboutData={aboutData} fullTools={fullTools} />
        <Projects projectsData={projectsData} />
        <Contact contactData={contactData} />
      </Layout>
    </>
  );
}

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      content: locales[locale],
    },
  };
};
