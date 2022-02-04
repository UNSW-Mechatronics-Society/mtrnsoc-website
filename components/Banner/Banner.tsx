import styles from "./Banner.module.scss";

type BannerProps = {
  imgURL: string;
  text?: string;
  arrow: boolean;
};

export default function Banner({
  imgURL,
  text = undefined,
  arrow = false,
}: BannerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={imgURL} alt="hero banner" className={styles.image} draggable="false" />
      {/* if text exists, create div */}
      {text && (
        <div className={styles.textContainer}>
          <h1 className={styles.titleText}>{text.toUpperCase()}</h1>
        </div>
      )}
      {arrow && (
        <div className={styles.arrowDown}>
          <img src="/arrowDown.svg" alt="" className={styles.arrowDown} draggable={false} />
        </div>
      )}
    </div>
  );
}
