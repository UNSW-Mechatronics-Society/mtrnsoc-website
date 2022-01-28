import styles from "./ContentContainer.module.scss";

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer = ({ children }: ContentContainerProps): JSX.Element => {
  return (
    <section className="w-full h-full grid place-items-center">
      <div className="w-full h-full max-w-screen-2xl">
        <div className="h-full px-6">{children}</div>
      </div>
    </section>
  );
};

export default ContentContainer;
