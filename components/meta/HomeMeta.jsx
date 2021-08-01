import Head from "next/head";
import React from "react";

const HomeMeta = () => {
  return (
    <Head>
      {/* Home metadata */}
      <title>Bryan Gama | Home</title>
      <meta name="description" content="Fullstack Developer" />
      <meta
        name="keywords"
        content="portfolio, personal website, web developer, fullstack developer"
      />
    </Head>
  );
};

export default HomeMeta;
