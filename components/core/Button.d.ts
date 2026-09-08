import * as React from "react";

/**
 * Primary action control. Uppercase-free, condensed-free: buttons use the text grotesque.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual role. Use exactly one `primary` per view. */
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "danger";
  size?: "sm" | "md" | "lg";
  /** Stretch to the container width (forms, mobile). */
  block?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
