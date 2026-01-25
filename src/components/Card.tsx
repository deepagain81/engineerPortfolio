import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      {children}
    </div>
  );
}
