import * as React from "react";

/** Multi-line text control, min-height 110px, vertically resizable. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  rows?: number;
}
export function Textarea(props: TextareaProps): JSX.Element;
