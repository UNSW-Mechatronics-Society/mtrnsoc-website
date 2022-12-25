import { Link as ScrollLink } from "react-scroll";
import styles from "./Banner.module.scss";

type BannerProps = {
  imgURL: string;
  text?: string;
  arrow: boolean;
  position: PositionType;
  scrollToID: string;
};

export type PositionType = "center" | "bottom-left";

type TextProps = {
  text: string;
  position: PositionType;
};

const Text = ({ text, position }: TextProps): JSX.Element => {
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
        <h1 className={`${styles.titleText} ${styles.titlePadding}`}>{text.toUpperCase()}</h1>
      </div>
    );
  }
};

export default function Banner({
  imgURL,
  text = undefined,
  arrow = false,
  position = "bottom-left",
  scrollToID,
}: BannerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={imgURL} alt="hero banner" className={styles.image} draggable="false" />
      {/* if text exists, create div */}
      {text !== undefined && <Text position={position} text={text} />}
      {arrow && (
        <div className={styles.arrowDown}>
          <ScrollLink
            to={scrollToID}
            // activeClass="active"
            // spy={true}
            smooth={true}
            offset={-60} // 60px is the standard size of the navbar
            duration={750}
          >
            <img src="/logos/arrowDown.svg" alt="" className={styles.arrowDown} draggable={false} />
          </ScrollLink>
        </div>
      )}
    </div>
  );
}
