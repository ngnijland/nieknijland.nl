import React, { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

export const isClient = typeof window === "object";

export function useWindowSize(
  initialWidth = Infinity,
  initialHeight = Infinity
): WindowSize {
  const [state, setState] = useState<WindowSize>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  function onResize() {
    setState({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    if (isClient) {
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return state;
}
