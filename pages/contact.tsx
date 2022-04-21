import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContentContainer, MetaTags } from "components";
import defaultSocialsData, { socialData } from "data/socialsData";
import styles from "styles/contact.module.scss";

type ContactPageProps = {
  socialsData: socialData[];
};

const Contact: NextPage<ContactPageProps> = ({ socialsData }) => {
  const emailData = socialsData.find((x) => x.name === "Email");
  if (emailData === undefined) throw "Cannot find emailData from socialData.ts";

  return (
    <div className="w-full h-full grid place-items-center">
      <MetaTags title="Contact - MTRNSoc" description="Contact society" />
      <ContentContainer>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4">Wanna get in touch?</h1>
          <p className="text-2xl font-medium mb-1">General Contact</p>
          <p className="text-lg underline">
            <Link href={emailData.url}>
              <a>{emailData.display}</a>
            </Link>
          </p>
          <h1 className="text-3xl font-semibold mt-6 mb-4">Stay Connected</h1>
          <div className="flex">
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
