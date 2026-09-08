import * as React from "react";

/**
 * Profile card for a network member: portrait, focus field, name, short bio, competence tags.
 */
export interface ExpertCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  /** Focus field, set in uppercase mono teal. */
  role?: React.ReactNode;
  bio?: React.ReactNode;
  /** 4:5 portrait. Falls back to initials on sand. */
  photo?: string;
  tags?: string[];
  layout?: "stack" | "row";
  onClick?: (e: React.MouseEvent) => void;
}
export function ExpertCard(props: ExpertCardProps): JSX.Element;
