import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2";

    const variantStyles = {
      primary:
        "bg-accent-primary text-white hover:brightness-110 active:scale-[0.98] shadow-glow-accent",
      secondary:
        "bg-bg-surface-alt text-text-primary border border-border-subtle hover:border-accent-primary/60 hover:bg-bg-surface-alt/80 active:scale-[0.98]",
      outline:
        "bg-transparent text-text-primary border border-border-subtle hover:border-accent-primary hover:text-white active:scale-[0.98]",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface-alt/50 active:scale-[0.98]",
      link:
        "bg-transparent text-accent-primary underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-6 text-base rounded-xl gap-2.5",
      icon: "h-10 w-10 p-0 rounded-xl",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "link" ? sizeStyles[size] : "",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
