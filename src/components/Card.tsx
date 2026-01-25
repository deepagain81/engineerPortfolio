import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-surface p-5 shadow-soft">
      {children}
    </div>
  );
}
