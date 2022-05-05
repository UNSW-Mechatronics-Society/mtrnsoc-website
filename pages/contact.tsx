import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContentContainer, MetaTags } from "components";
import defaultSocialsData, { SocialData } from "data/socialsData";
import styles from "styles/contact.module.scss";

type ContactPageProps = {
  socialsData: SocialData[];
};

const Contact: NextPage<ContactPageProps> = ({ socialsData }) => {
  const emailData = socialsData.find((x) => x.name === "Email");
  if (emailData === undefined) throw "Cannot find emailData from socialData.ts";

  return (
    <div className={styles.pageContainer}>
      <MetaTags title="Contact - MTRNSoc" description="Contact society" />
      <ContentContainer>
        <div className={styles.mainContainer}>
          <h1 className="text-3xl font-semibold mb-4">Wanna get in touch?</h1>
          <p className="text-2xl font-medium mb-1">General Contact</p>
          <p className="text-lg underline">
            <Link href={emailData.url}>
              <a>{emailData.display}</a>
            </Link>
          </p>
          <h1 className="text-3xl font-semibold mt-6 mb-4">Stay Connected</h1>
          <div className={styles.socialIconContainer}>
            {socialsData.map((social) => (
              <Link href={social.url} key={social.name}>
                <a target="_blank">
                  <img
                    src={social.logoUrl}
                    alt={social.altText}
                    aria-label={social.name}
                    className={`${styles.logoSize} ${styles.logoColour}`}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  return {
    props: {
      socialsData: defaultSocialsData,
    },
  };
};

export default Contact;
