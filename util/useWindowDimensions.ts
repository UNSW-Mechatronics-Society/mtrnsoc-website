// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
import { useEffect, useState } from "react";

type windowDimensions = {
  width: number | null;
  height: number | null;
};

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return { width: null, height: null };
  }
};

/**
 * NOTE: When SSR in NextJS, the window dimensions does not exist,
 * and hence will be `null`. See `getWindowDimensions()` function
 */
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
