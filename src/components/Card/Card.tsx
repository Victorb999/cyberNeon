import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const cardVariants = cva(
    "p-6 relative transition-all",
    {
        variants: {
            variant: {
                default: "bg-surface-container border-outline-variant",
                secondary: "bg-surface-container-lowest border-outline-variant/30",
            },
            borderTheme: {
                primary: "[--border-accent:var(--color-primary)]",
                secondary: "[--border-accent:var(--color-secondary)]",
                success: "[--border-accent:var(--color-success)]",
                error: "[--border-accent:var(--color-error)]",
                info: "[--border-accent:var(--color-info)]",
                warning: "[--border-accent:var(--color-warning)]",
            },
            borderDirection: {
                none: "",
                top: "border-t-2 border-t-[var(--border-accent)]",
                bottom: "border-b-2 border-b-[var(--border-accent)]",
                left: "border-l-2 border-l-[var(--border-accent)]",
                right: "border-r-2 border-r-[var(--border-accent)]",
                all: "border-2 border-[var(--border-accent)]",
            },
            curcorner: {
                true: "clip-path-card overflow-hidden",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            borderTheme: "primary",
            borderDirection: "left",
            curcorner: true,
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, borderTheme, borderDirection, curcorner, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({ variant, borderTheme, borderDirection, curcorner, className }))}
            {...props}
        />
    )
);

export const CardHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
);

export const CardTitle = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
        className={cn(
            "font-headline text-lg font-bold uppercase tracking-widest text-on-surface",
            className
        )}
        {...props}
    />
);

export const CardDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={cn("font-body text-sm text-on-surface-variant", className)}
        {...props}
    />
);

export const CardContent = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("", className)} {...props} />
);

export const CardFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex items-center pt-4 mt-4 border-t border-outline-variant",
            className
        )}
        {...props}
    />
);

Card.displayName = "Card";
