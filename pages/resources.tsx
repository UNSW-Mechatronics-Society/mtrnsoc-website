import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="Resources - MTRNSoc" description="Society resources" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Resources Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;