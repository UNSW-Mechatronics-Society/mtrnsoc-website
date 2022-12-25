import styles from "./ContentContainer.module.scss";

type ContentContainerProps = {
  /**
   * Has to be valid TailWindCSS class colour name
   */
  customBackgroundColour?: string;
  children: React.ReactNode;
};

const ContentContainer = ({
  children,
  customBackgroundColour = undefined,
}: ContentContainerProps): JSX.Element => {
  return (
    <section className={`${styles.mainContainer} ${customBackgroundColour ?? ""}`}>
      <div className={styles.limitingContainer}>
        <div className={styles.paddingContainer}>{children}</div>
      </div>
    </section>
  );
};

export default ContentContainer;
