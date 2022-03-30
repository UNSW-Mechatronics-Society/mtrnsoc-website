import React from "react";
import styles from "./DropdownYear.module.scss";

type DropdownRow = {
  yearToDisplay: number;
};

const DropdownRow = ({ yearToDisplay }: DropdownRow): JSX.Element => {
  return <></>;
};

type DropdownYearProps = {
  /**
   * Array of years as numbers. Assumes its sorted.
   *
   * Assumes that there are at least 2 years
   */
  years: number[];
};

export default function DropdownYear({ years }: DropdownYearProps): JSX.Element {
  years = [2022, 2021, 2020, 2019, 2018];
  if (years.length < 2) throw new Error("There are less than 2 years in `years` array");

  const sortedYears = [...years].sort().reverse();
  const oldestYear = sortedYears.shift();

  const [active, setActive] = React.useState(false);

  const handleOnClick = () => setActive(!active);

  return (
    <>
      <div
        className={`${styles.containerSize} ${styles.mainContainer} ${styles.customBackground} ${styles.customBottomPadding} ${styles.paddingBottom}`}
        onClick={handleOnClick}
      >
        <p className="text-xl font-semibold select-none">{oldestYear}</p>
        <img
          className={`${styles.arrow} ${active ? styles.upsideDown : ""}`}
          src="/misc/chevron--down.svg"
          alt=""
          draggable={false}
        />
        {active && (
          <div className="absolute">
            <div className="z-50 right-[1rem] top-[2.5rem] relative">
              {sortedYears.map((x) => {
                return (
                  <div
                    className={`${styles.containerSize} ${styles.customBackground} ${styles.testStuff}`}
                    key={`dropdown-${x}`}
                  >
                    <p className="text-xl font-medium select-none">{x}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
