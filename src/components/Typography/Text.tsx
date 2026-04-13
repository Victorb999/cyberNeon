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
                body: "font-body text-base leading-relaxed",
                lead: "font-body text-lg md:text-xl leading-relaxed",
                label: "font-headline text-[10px] font-bold uppercase tracking-[0.2em]",
                mono: "font-mono text-xs tracking-widest uppercase",
                caption: "font-body text-sm text-on-surface-variant",
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
    extends React.HTMLAttributes<HTMLParagraphElement>,
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
