import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "bg-surface-container border-l-2 border-primary/20 clip-path-card p-6 relative overflow-hidden",
            className
        )}
        {...props}
    />
));

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
    <div className={cn("flex items-center pt-4 mt-4 border-t border-outline-variant", className)} {...props} />
);

Card.displayName = "Card";
