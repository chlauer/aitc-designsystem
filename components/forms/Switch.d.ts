import * as React from "react";

/** Immediate-effect toggle (44×24 track). Use a Checkbox when the change needs a save action. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export function Switch(props: SwitchProps): JSX.Element;
