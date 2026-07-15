import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "lilac" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  children?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  lilac: "bg-lilac text-ink hover:bg-lilac-soft",
  outline: "bg-card text-ink hover:bg-cream",
  ghost: "bg-transparent text-ink border-transparent shadow-none hover:bg-lilac-soft",
  dark: "bg-ink text-white hover:bg-ink/90",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm min-h-9",
  md: "px-4 py-2 text-sm min-h-11",
  lg: "px-6 py-3 text-base min-h-12",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "lilac", size = "md", className, children, ...props },
  ref,
) {
  const isGhost = variant === "ghost";
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
        !isGhost && "btn-hard btn-hard-hover",
        variantClasses[variant],
        sizeClasses[size],
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
