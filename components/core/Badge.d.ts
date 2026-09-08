import * as React from "react";

/** Small uppercase mono label for status and metadata. Never interactive. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "brand" | "solid" | "sand" | "success" | "warning" | "danger";
  outline?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
