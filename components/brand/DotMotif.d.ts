import * as React from "react";

/** Decorative dot swirl lifted from the logo. Absolute; needs a positioned, clipped parent. */
export interface DotMotifProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  opacity?: number;
  position?: "right" | "left" | "center";
  /** `white` on teal/navy, `teal` on light surfaces. */
  tone?: "white" | "teal";
  assetBase?: string;
}
export function DotMotif(props: DotMotifProps): JSX.Element;
