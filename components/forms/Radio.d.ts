import * as React from "react";

/** Radio with inline label. Group by sharing a `name`. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}
export function Radio(props: RadioProps): JSX.Element;
