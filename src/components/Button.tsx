import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-black text-white hover:opacity-90 focus-visible:ring-black ring-offset-white",
  secondary: "bg-white text-black border border-black/15 hover:bg-black/5 focus-visible:ring-black ring-offset-white",
  ghost: "bg-transparent text-black hover:bg-black/5 focus-visible:ring-black ring-offset-white",
};

export function ButtonLink({ variant = "primary", className = "", ...props }: AnchorProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({ variant = "primary", className = "", ...props }: NativeButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
`   `