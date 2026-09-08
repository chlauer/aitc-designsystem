import * as React from "react";

/** Pill for topic/competence keywords. Interactive when `onClick` is passed (filters). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Shows a × affordance (input chips). */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
