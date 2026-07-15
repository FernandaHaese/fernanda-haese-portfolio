import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "lilac" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

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

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

type ButtonLinkInternalProps = Common & LinkProps;
type ButtonLinkExternalProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { external: true };

export function ButtonLink(props: ButtonLinkInternalProps | ButtonLinkExternalProps) {
  const { variant = "lilac", size = "md", className, children } = props;
  const isGhost = variant === "ghost";
  const base = cn(
    "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
    !isGhost && "btn-hard btn-hard-hover",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  if ("external" in props) {
    const { external: _e, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a {...rest} className={base}>
        {children}
      </a>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonLinkInternalProps;
  return (
    <Link {...rest} className={base}>
      {children}
    </Link>
  );
}

export const ExternalButtonAnchor = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & Common
>(function ExternalButtonAnchor({ variant = "lilac", size = "md", className, children, ...rest }, ref) {
  const isGhost = variant === "ghost";
  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
        !isGhost && "btn-hard btn-hard-hover",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
});
