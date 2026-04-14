import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const tableVariants = cva(
    "relative w-full overflow-auto border transition-all",
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
                top: "border-t-[3px] border-t-[var(--border-accent)]",
                bottom: "border-b-[3px] border-b-[var(--border-accent)]",
                left: "border-l-[3px] border-l-[var(--border-accent)]",
                right: "border-r-[3px] border-r-[var(--border-accent)]",
                all: "border-[1px] border-[var(--border-accent)]",
                none: "border-none",
            },
            curcorner: {
                true: "clip-path-card",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            borderDirection: "none",
            borderTheme: "primary",
            curcorner: false,
        },
    }
);

export interface TableProps
    extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
    containerClassName?: string;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, containerClassName, variant, borderTheme, borderDirection, curcorner, ...props }, ref) => (
        <div className={cn(tableVariants({ variant, borderTheme, borderDirection, curcorner, className: containerClassName }))}>
            <table
                ref={ref}
                className={cn("w-full caption-bottom text-sm font-body", className)}
                {...props}
            />
        </div>
    )
);

export const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b border-outline-variant", className)} {...props} />
));

export const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
    />
));

export const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t bg-surface-container/50 font-medium [&>tr]:last:border-b-0",
            className
        )}
        {...props}
    />
));

export const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b border-outline-variant/30 transition-colors hover:bg-primary/5 data-[state=selected]:bg-surface-container",
            className
        )}
        {...props}
    />
));

export const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-10 px-4 text-left align-middle font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
));

export const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "p-4 align-middle font-body [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
));

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableFooter.displayName = "TableFooter";
TableRow.displayName = "TableRow";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";
