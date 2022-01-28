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
    <section
      className={`w-full h-full grid place-items-center ${
        customBackgroundColour ? customBackgroundColour : ""
      }`}
    >
      <div className="w-full h-full max-w-screen-2xl">
        <div className="h-full px-6">{children}</div>
      </div>
    </section>
  );
};

export default ContentContainer;
