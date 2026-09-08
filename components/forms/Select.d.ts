import * as React from "react";

/** Native select with a CSS chevron. Options may be strings or {value,label}. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  invalid?: boolean;
}
export function Select(props: SelectProps): JSX.Element;
