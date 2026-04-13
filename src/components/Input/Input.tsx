import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const inputVariants = cva(
    "flex w-full bg-surface-container-low px-4 py-3 text-sm font-body text-on-surface ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-on-surface-variant focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all border-b-2 border-outline-variant",
    {
        variants: {
            intent: {
                default: "focus:border-primary focus:bg-surface-container",
                error: "border-error focus:border-error focus:bg-error/5",
                success: "border-[#22c55e] focus:border-[#22c55e]",
            },
        },
        defaultVariants: {
            intent: "default",
        },
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, intent, label, type, ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5 flex flex-col items-start">
                {label && (
                    <label className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(inputVariants({ intent, className }))}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = "Input";
