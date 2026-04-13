import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const headingVariants = cva(
    "font-headline uppercase tracking-tight leading-none text-on-surface",
    {
        variants: {
            level: {
                display: "text-7xl md:text-9xl font-black tracking-tighter",
                h1: "text-6xl md:text-8xl font-black tracking-tighter",
                h2: "text-4xl md:text-5xl font-bold tracking-tight",
                h3: "text-2xl md:text-3xl font-bold tracking-normal",
                h4: "text-xl font-bold tracking-wide",
            },
            intent: {
                default: "text-on-surface",
                primary: "text-primary-dim",
                secondary: "text-secondary",
                muted: "text-on-surface-variant",
            },
        },
        defaultVariants: {
            level: "h1",
            intent: "default",
        },
    }
);

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
    ({ className, level, intent, as: Component = "h1", ...props }, ref) => {
        return (
            <Component
                ref={ref as any}
                className={cn(headingVariants({ level, intent, className }))}
                {...props}
            />
        );
    }
);

Heading.displayName = "Heading";
