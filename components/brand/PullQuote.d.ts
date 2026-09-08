import * as React from "react";

/**
 * Statement quote in light condensed display type. Use for slide and section statements.
 */
export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  author?: React.ReactNode;
  role?: React.ReactNode;
  size?: "sm" | "lg";
  /** `invert` on teal or navy backgrounds. */
  tone?: "default" | "invert";
}
export function PullQuote(props: PullQuoteProps): JSX.Element;
