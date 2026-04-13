import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-headline uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:translate-x-[2px] active:translate-y-[2px]",
    {
        variants: {
            variant: {
                primary: "bg-primary text-on-primary-fixed shadow-[0_0_15px_rgba(255,139,157,0.5)] hover:shadow-[0_0_25px_rgba(255,139,157,0.8)] hover:-translate-y-0.5 clip-path-button",
                secondary: "bg-surface-container-highest text-secondary border-r-2 border-secondary hover:bg-secondary/10",
                ghost: "text-on-surface hover:bg-surface-container-high hover:text-primary",
                tertiary: "bg-transparent text-primary hover:bg-primary/5 clip-path-polygon relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary",
            },
            size: {
                sm: "h-8 px-3 text-[10px]",
                md: "h-10 px-6",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
