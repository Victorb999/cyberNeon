import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { useListContext, type ListTheme, type ListBorderDirection } from "./ListContext";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const listItemVariants = cva(
    "group flex items-center gap-4 px-6 py-4 cursor-pointer transition-all duration-200 font-headline text-[11px] font-bold tracking-[0.2em] uppercase",
    {
        variants: {
            borderDirection: {
                left: "border-l-[6px]",
                right: "border-r-[6px]",
                top: "border-t-[6px]",
                bottom: "border-b-[6px]",
                all: "border-[1px]",
                none: "border-none",
            },
            active: {
                true: "bg-surface-bright/50",
                false: "bg-transparent text-secondary/60 hover:bg-surface-bright/20 hover:text-secondary",
            },
        },
        defaultVariants: {
            active: false,
            borderDirection: "left",
        },
    }
);

const themeMap = {
    primary: "text-primary border-primary",
    secondary: "text-secondary border-secondary",
    success: "text-success border-success",
    error: "text-error border-error",
    info: "text-info border-info",
    warning: "text-warning border-warning",
};

export interface ListItemProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listItemVariants> {
    icon?: React.ReactNode;
    label: string;
    theme?: ListTheme;
    borderDirection?: ListBorderDirection;
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
    ({ className, active, icon, label, theme: propTheme, borderDirection: propBorderDirection, ...props }, ref) => {
        const { theme: contextTheme, borderDirection: contextBorderDirection } = useListContext();
        const activeTheme = propTheme || contextTheme;
        const borderDirection = propBorderDirection || contextBorderDirection;

        return (
            <div
                ref={ref}
                className={cn(
                    listItemVariants({ active, borderDirection }),
                    !active
                        ? themeMap[activeTheme as keyof typeof themeMap]
                        : (borderDirection !== 'none' ? "border-primary-dim text-primary-dim" : "border-transparent"),
                    className
                )}
                {...props}
            >
                {icon && <span className="text-xl flex items-center justify-center shrink-0 w-6 h-6">{icon}</span>}
                <span className="flex-1 mt-0.5">{label}</span>
            </div>
        );
    }
);

ListItem.displayName = "ListItem";
