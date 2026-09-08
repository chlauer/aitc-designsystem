import * as React from "react";

/** Single-line text control, 44px tall. Wrap in `Field` for a label. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md";
  invalid?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
