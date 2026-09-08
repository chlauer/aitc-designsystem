import * as React from "react";

/** Label + control + hint/error wrapper. Labels are uppercase mono, 12px. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Replaces the hint and turns the message red. */
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
}
export function Field(props: FieldProps): JSX.Element;
