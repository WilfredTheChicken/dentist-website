import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

/** A small shadcn-style primitive kept local so visual treatments stay consistent. */
export function Button({ children, className = "", ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button className={`button ${className}`} {...props}>{children}</button>;
}
