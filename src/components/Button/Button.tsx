import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-headline uppercase font-bold tracking-[0.15em] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:translate-x-[1px] active:translate-y-[1px]",
    {
        variants: {
            variant: {
                primary: "bg-primary text-on-primary-fixed shadow-[0_0_15px_rgba(255,139,157,0.3)] hover:shadow-[0_0_20px_rgba(255,139,157,0.5)]",
                secondary: "bg-secondary text-black hover:bg-secondary/90 shadow-[0_0_15px_rgba(226,231,176,0.2)]",
                tertiary: "bg-transparent border border-primary/30 text-primary hover:border-primary hover:bg-primary/5",
                ghost: "text-on-surface hover:bg-surface-container-high hover:text-primary",
            },
            size: {
                sm: "h-8 px-4 text-[10px]",
                md: "h-11 px-8",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
            cutCorner: {
                true: "clip-path-cyber",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            cutCorner: true,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, cutCorner, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, cutCorner, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
