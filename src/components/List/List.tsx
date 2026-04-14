import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { ListProvider, type ListTheme, type ListBorderDirection } from "./ListContext";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const listVariants = cva(
    "flex flex-col w-full transition-all",
    {
        variants: {
            variant: {
                default: "bg-surface-container",
                secondary: "bg-surface-container-lowest",
            },
        },
        defaultVariants: {
            variant: "secondary",
        },
    }
);

export interface ListProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listVariants> {
    theme?: ListTheme;
    borderDirection?: ListBorderDirection;
}

export const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ className, variant, theme = 'primary', borderDirection = 'left', children, ...props }, ref) => {
        return (
            <ListProvider value={{ theme, borderDirection }}>
                <div
                    ref={ref}
                    className={cn(listVariants({ variant, className }))}
                    {...props}
                >
                    {children}
                </div>
            </ListProvider>
        );
    }
);

List.displayName = "List";
