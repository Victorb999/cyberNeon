import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const textVariants = cva(
    "text-on-surface",
    {
        variants: {
            variant: {
                body: "font-body text-[14px] md:text-[16px] leading-[1.5]",
                lead: "font-body text-base md:text-lg leading-relaxed",
                label: "font-headline text-[11px] font-medium uppercase tracking-[0.15em] leading-[1.4]",
                mono: "font-mono text-[12px] tracking-widest uppercase leading-[1.5]",
                caption: "font-body text-xs text-on-surface-variant",
            },
            intent: {
                default: "text-on-surface",
                primary: "text-primary",
                secondary: "text-secondary",
                muted: "text-on-surface-variant",
                error: "text-error",
            },
        },
        defaultVariants: {
            variant: "body",
            intent: "default",
        },
    }
);

export interface TextProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div" | "label";
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ className, variant, intent, as: Component = "p", ...props }, ref) => {
        return (
            <Component
                ref={ref as any}
                className={cn(textVariants({ variant, intent, className }))}
                {...props}
            />
        );
    }
);

Text.displayName = "Text";
