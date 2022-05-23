import Head from "next/head";

type MetaTagProps = {
  title: string;
  description: string;
  /**
   * For the og:image property
   */
  imgURL: string;
  robots?: string;
};

const MetaTags = ({
  title,
  description,
  imgURL,
  robots = "index, follow",
}: MetaTagProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:image" content={imgURL} />
    </Head>
  );
};

export default MetaTags;
