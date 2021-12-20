import { NavBar, Footer } from "components";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={`${styles.mainContent} bg-gray-500`}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <main>{children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
