import Head from "next/head";
import React from "react";

const HomeMeta = ({ homeMetaData: m }) => {
  return (
    <Head>
      {/* Home metadata */}
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta
        name="keywords"
        content="portfolio, personal website, web developer, fullstack developer"
      />
      <meta property="og:site_name" content="Bryan Gama" />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.url} />
      <meta property="og:image" content={m.image} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default HomeMeta;
