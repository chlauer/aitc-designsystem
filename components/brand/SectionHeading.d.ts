import * as React from "react";

/**
 * Eyebrow + condensed uppercase title + lead paragraph. The standard section opener.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  align?: "start" | "center";
  eyebrowTone?: "brand" | "muted" | "invert";
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
