import { ConstructionMessage, ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Main Content</div>
      </ContentContainer>

      {/* <footer></footer> */}
    </div>
  );
};

export default Home;
