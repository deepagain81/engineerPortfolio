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
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm weight-strong transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent",
  secondary:
    "bg-surface text-ink border border-ink/15 hover:bg-ink/5 focus-visible:ring-accent",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 focus-visible:ring-accent",
};


export function ButtonLink({ variant = "primary", className = "", ...props }: AnchorProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({ variant = "primary", className = "", ...props }: NativeButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}