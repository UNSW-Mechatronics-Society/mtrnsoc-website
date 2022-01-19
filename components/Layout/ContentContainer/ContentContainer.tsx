import styles from "./ContentContainer.module.scss";

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer = ({ children }: ContentContainerProps): JSX.Element => {
  return (
    <div className="w-full h-full max-w-screen-2xl">
      <div className="h-full px-6">{children}</div>
    </div>
  );
};

export default ContentContainer;
