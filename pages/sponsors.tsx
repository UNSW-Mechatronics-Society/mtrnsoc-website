import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Banner, ContentContainer, MetaTags } from "components";
import { SocialData, emailData } from "data/socialsData";
import sponsorsData, { SponsorData } from "data/sponsorsData";
import styles from "styles/sponsors.module.scss";

type SponsorsPageProps = {
  affiliates: SponsorData[];
  sponsors: SponsorData[];
  emailData: SocialData;
};

const Sponsors: NextPage<SponsorsPageProps> = ({ affiliates, sponsors, emailData }) => {
  return (
    <div className="h-full">
      <MetaTags title="Sponsors - MTRNSoc" description="Society sponsors" />
      <Banner
        imgURL="/images/other/frontPageBannerEdited.png"
        text="Sponsors"
        arrow={true}
        position="center"
      />
      <ContentContainer>
        <div className={styles.mainContainer}>
          <p className={styles.textContainer}>
            If you are interested in sponsoring our society, or would like to know more about our
            sponsor packages, please contact us at{" "}
            <span className="underline">
              <Link href={emailData.url}>{emailData.display}</Link>
            </span>
            , or go through our contact page!
          </p>
          <div className={styles.sectionContainer}>
            <h1 className={styles.sectionTitle}>Proudly Supported By</h1>
            <div className={styles.sectionImagesContainer}>
              {sponsors.map((x) => (
                <img key={x.alt} src={x.src} alt={x.alt} className={styles.sectionImage} />
              ))}
            </div>
          </div>
          <div className={`${styles.sectionContainer} pt-10 pb-12`}>
            <h1 className={styles.sectionTitle}>Affiliations</h1>
            <div className={styles.sectionImagesContainer}>
              {affiliates.map((x) => (
                <img key={x.alt} src={x.src} alt={x.alt} className={styles.sectionImage} />
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SponsorsPageProps> = async () => {
  const affiliates = sponsorsData.filter((x) => x.type === "affiliate");
  const sponsors = sponsorsData.filter((x) => x.type === "sponsor");

  return {
    props: {
      affiliates: affiliates,
      sponsors: sponsors,
      emailData: emailData,
    },
  };
};

export default Sponsors;
