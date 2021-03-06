import "styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  if (Component.displayName === "ErrorPage" || Component.displayName === "NoLayout") {
    // Currently using `displayName` to remove Layout formatting
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
