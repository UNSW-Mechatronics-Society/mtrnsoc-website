import "styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  if (Component.displayName === "ErrorPage") {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
