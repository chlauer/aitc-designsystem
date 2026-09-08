import * as React from "react";

/** Generic surface container. 6px radius, hairline border, no shadow unless `raised`. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "flat" | "raised" | "sand" | "ink" | "brand";
  interactive?: boolean;
  /** Short teal rule above the content — the brand's section marker. */
  rule?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
