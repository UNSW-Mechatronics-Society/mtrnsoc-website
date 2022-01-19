import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Home Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;
