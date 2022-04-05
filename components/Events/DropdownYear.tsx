import React from "react";
import styles from "./DropdownYear.module.scss";

// type DropdownRow = {
//   yearToDisplay: number;
// };

// const DropdownRow = ({ yearToDisplay }: DropdownRow): JSX.Element => {
//   return <></>;
// };

type DropdownYearProps = {
  /**
   * Array of years as numbers. Assumes its sorted.
   *
   * Assumes that there are at least 2 years
   */
  years: number[];
  yearSelected: number;
  setYearSelected: React.Dispatch<React.SetStateAction<number>>;
};

export default function DropdownYear({
  years,
  yearSelected,
  setYearSelected,
}: DropdownYearProps): JSX.Element {
  if (years.length < 2) throw new Error("There are less than 2 years in `years` array");

  // Remove the selected year, and sort it in decreasing order
  const sortedYears = [...years]
    .filter((x) => x != yearSelected)
    .sort()
    .reverse();

  const [active, setActive] = React.useState(false);

  const handleOnClickDropdown = () => setActive(!active);

  return (
    <>
      <div
        className={`${styles.containerSize} ${styles.mainContainer} ${styles.customBackground} ${styles.customBottomPadding} ${styles.paddingBottom}`}
        onClick={handleOnClickDropdown}
      >
        <p className="text-xl font-semibold select-none">{yearSelected}</p>
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
                    className={`${styles.containerSize} ${styles.customBackground} border-b-[1px] border-onyx`}
                    key={`dropdown-${x}`}
                    onClick={() => setYearSelected(x)}
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
