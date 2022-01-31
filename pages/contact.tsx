import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="Contact - MTRNSoc" description="Contact society" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Contact Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;
