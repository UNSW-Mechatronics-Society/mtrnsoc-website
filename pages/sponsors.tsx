import type { NextPage } from "next";
import { ContentContainer, MetaTags } from "components";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-full">
      <MetaTags title="Sponsors - MTRNSoc" description="Society sponsors" />

      <ContentContainer>
        <div className="flex justify-center h-full py-4">Sponsors Page</div>
      </ContentContainer>
    </div>
  );
};

export default Home;
