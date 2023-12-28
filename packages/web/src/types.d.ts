/*
 * No TypeScript support for this module yet
 *
 * https://github.com/sanity-io/block-content-to-react/issues/26
 */
declare module "@sanity/block-content-to-react";

interface Window {
  plausible: (arg0: string, options: { props: { path: string } }) => void;
}
