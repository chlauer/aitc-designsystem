import * as React from "react";

/** Uppercase mono kicker with a leading rule. Sits above every section title. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "muted" | "invert";
  /** The 24px leading rule. Off for inline use. */
  rule?: boolean;
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
