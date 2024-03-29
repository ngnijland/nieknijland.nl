import React from "react";

export interface DownArrowIconProps {
  className?: string;
  width?: string;
}

function DownArrowIcon({
  width = "1rem",
  ...rest
}: DownArrowIconProps): JSX.Element {
  return (
    <svg viewBox="0 0 447.243 447.243" width={width} {...rest}>
      <title>Arrow down</title>
      <path d="M406.101 232.603a31.842 31.842 0 00-3.116-2.745c-13.381-8.971-31.276-7.013-42.4 4.64l-88.64 88.32a64.002 64.002 0 00-11.68 16l-5.12 9.76v-314.4c.677-16.099-10.332-30.349-26.08-33.76-17.445-2.829-33.881 9.019-36.71 26.465a31.967 31.967 0 00-.41 5.535v315.52l-3.2-6.88a63.998 63.998 0 00-12.8-18.08l-88.64-88.48c-11.124-11.653-29.019-13.611-42.4-4.64-14.259 10.441-17.355 30.464-6.914 44.724a32.018 32.018 0 002.754 3.276l160 160c12.49 12.504 32.751 12.515 45.255.025l.025-.025 160-160c12.517-12.476 12.552-32.737.076-45.255z" />
    </svg>
  );
}

export default DownArrowIcon;
