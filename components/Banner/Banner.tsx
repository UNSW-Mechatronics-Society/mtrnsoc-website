import styles from "./Banner.module.scss";

type BannerProps = {
  imgURL: string;
  text?: string;
  arrow: boolean;
  position: PositionType;
};

type PositionType = "center" | "bottom-left";

type TextProps = {
  text: string;
  position: PositionType;
};

function Text({ text, position }: TextProps) {
  if (position === "bottom-left") {
    return (
      <div className={styles.textContainerBottomLeft}>
        <h1 className={styles.titleText}>{text.toUpperCase()}</h1>
      </div>
    );
  } else {
    // Center
    return (
      <div className={styles.textContainerCenter}>
        <h1 className={styles.titleText}>{text.toUpperCase()}</h1>
      </div>
    );
  }
}

export default function Banner({
  imgURL,
  text = undefined,
  arrow = false,
  position = "bottom-left",
}: BannerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={imgURL} alt="hero banner" className={styles.image} draggable="false" />
      {/* if text exists, create div */}
      {text && <Text position={position} text={text} />}
      {arrow && (
        <div className={styles.arrowDown}>
          <img src="/arrowDown.svg" alt="" className={styles.arrowDown} draggable={false} />
        </div>
      )}
    </div>
  );
}
