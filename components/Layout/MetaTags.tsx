import Head from "next/head";

type MetaTagProps = {
  title: string;
  description: string;
  robots?: string;
};

const MetaTags = ({ title, description, robots = "index, follow" }: MetaTagProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
    </Head>
  );
};

export default MetaTags;
