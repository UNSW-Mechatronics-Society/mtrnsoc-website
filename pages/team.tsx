import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="Team - MTRNSoc" description="Meet the MTRNSoc team" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Teams Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;
