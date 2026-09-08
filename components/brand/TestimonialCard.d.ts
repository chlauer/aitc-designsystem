import * as React from "react";

/** Client reference on sand with a teal top rule and an avatar attribution row. */
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  author: string;
  role?: React.ReactNode;
  company?: React.ReactNode;
  avatar?: string;
}
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
