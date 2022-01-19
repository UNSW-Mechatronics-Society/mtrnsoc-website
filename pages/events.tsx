import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="Events - MTRNSoc" description="Society events" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Events Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;
