import { ConstructionMessage } from "components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-primary">
      <Head>
        <title>UNSW Mechatronics Society</title>
        <meta name="description" content="UNSW Mechatronics Society" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <ConstructionMessage />
      </main>

      {/* <footer></footer> */}
    </div>
  );
};

export default Home;
