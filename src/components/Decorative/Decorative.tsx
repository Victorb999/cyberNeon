import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const accentBarVariants = cva(
    "block",
    {
        variants: {
            position: {
                top: "h-0.5 w-16 mb-4",
                left: "h-full w-0.5 mr-4",
            },
            color: {
                primary: "bg-primary-dim",
                secondary: "bg-secondary",
                outline: "bg-outline-variant",
            },
        },
        defaultVariants: {
            position: "top",
            color: "primary",
        },
    }
);

export const AccentBar = ({ className, position, color }: VariantProps<typeof accentBarVariants> & { className?: string }) => (
    <span className={cn(accentBarVariants({ position, color, className }))} />
);

export const Glow = ({ className, color = "primary" }: { className?: string, color?: "primary" | "secondary" }) => (
    <div className={cn(
        "absolute -inset-0.5 opacity-0 group-hover:opacity-10 transition-opacity blur-[20px]",
        color === "primary" ? "bg-primary" : "bg-secondary",
        className
    )} />
);
