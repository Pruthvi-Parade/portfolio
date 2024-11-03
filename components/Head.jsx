import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Pruthvi Parade is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Pruthvi Parade, pruthvi, web developer portfolio, pruthvi web developer, pruthvi developer, mern stack, Pruthvi Parade portfolio"
      />
      <meta property="og:title" content="Pruthvi Parade's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Pruthvi Parade",
};
