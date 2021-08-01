import Head from "next/head";
import React from "react";

const m = {
  description:
    "Bryan Gama is a Fullstack Developer, pasionate about implementing incredible solutions and designs using React, Next.js, Node.js and MongoDB. ",
  title: "Bryan Gama | Home",
  image:
    "https://gist.githubusercontent.com/bryangamas/4a3e8a71b49a6b794f8766d5a268ea46/raw/248d7b789ba6b120958acbe890896296e16aa683/logo.png",
};

const HomeMeta = () => {
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
      <meta property="og:url" content="https://bryangama.com" />
      <meta property="og:image" content={m.image} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default HomeMeta;
