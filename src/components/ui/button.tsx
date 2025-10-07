import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center px-[18px] py-[14px] gap-[8px] rounded-[8px] align-middle cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none duration-[200ms]",
  {
    variants: {
      variant: {
        default: "bg-[#DBA13F] text-neutral-950 hover:bg-[#e3b35f]",
        secondary: "bg-white text-neutral-900 hover:bg-neutral-300",
      },
      size: {
        default: "text-[12px] leading-[20px] tracking-[0%]",
        md: "text-[14px] leading-[24px] tracking-[2%]",
        lg: "h-10 md:h-14 px-8",
        icon: "h-[16px] w-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  visible?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, visible = true, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={!visible}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
