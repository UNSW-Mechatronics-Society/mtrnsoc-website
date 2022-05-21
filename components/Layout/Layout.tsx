import { Footer, NavBar } from "components";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={`${styles.mainContent} bg-off-white`}>
      <header className={styles.navBar}>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
