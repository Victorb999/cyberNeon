import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const statusTagVariants = cva(
    "inline-flex items-center px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-widest border-r-2",
    {
        variants: {
            status: {
                success: "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]",
                error: "bg-[#FB1616]/10 text-[#FB1616] border-[#FB1616]",
                warning: "bg-secondary/10 text-secondary border-secondary",
                info: "bg-tertiary/10 text-tertiary border-tertiary",
                primary: "bg-primary/10 text-primary border-primary",
            },
        },
        defaultVariants: {
            status: "info",
        },
    }
);

export interface StatusTagProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusTagVariants> { }

export const StatusTag = React.forwardRef<HTMLDivElement, StatusTagProps>(
    ({ className, status, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(statusTagVariants({ status, className }))}
                {...props}
            >
                {children}
            </div>
        );
    }
);

StatusTag.displayName = "StatusTag";
