import * as React from "react";

/** Square, label-less control for toolbars and card affordances. `label` is required for a11y. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: "ghost" | "outline" | "solid";
  size?: "sm" | "md";
}
export function IconButton(props: IconButtonProps): JSX.Element;
