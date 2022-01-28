import { Banner, ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />
      <div className="flex flex-col h-full">
        <Banner imgURL="/images/other/originalHero.JPG" text="UNSW Mechatronics Society" />
        <ContentContainer>
          <div className="flex justify-center h-full py-4">Home Page</div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Home;
