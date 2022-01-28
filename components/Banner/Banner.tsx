import styles from "./Banner.module.scss";

type BannerProps = {
  imgURL: string;
  text?: string;
};

export default function Banner({ imgURL, text = undefined }: BannerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={imgURL} alt="hero banner" className={styles.image} draggable="false" />
      {/* if text exists, create div */}
      {text && (
        <div className={styles.textContainer}>
          <h1 className={styles.titleText}>{text}</h1>
        </div>
      )}
    </div>
  );
}