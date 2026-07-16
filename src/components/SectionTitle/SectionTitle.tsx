import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  as = "h2",
  className,
  align = "left",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  align?: "left" | "center";
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-extrabold tracking-tight text-ink",
        as === "h1" ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl md:text-4xl",
        align === "center" && "text-center",
        className,
      )}
    >
      <span className="title-highlight">{children}</span>
    </Tag>
  );
}
