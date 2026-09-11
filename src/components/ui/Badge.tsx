import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "mint" | "subtle" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full transition-colors";

  const variantStyles = {
    default:
      "bg-bg-surface-alt text-text-primary border border-border-subtle",
    accent:
      "bg-accent-primary/10 text-accent-primary border border-accent-primary/25",
    mint:
      "bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/25",
    subtle:
      "bg-bg-surface text-text-secondary border border-border-subtle",
    outline:
      "bg-transparent text-text-secondary border border-border-subtle",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
