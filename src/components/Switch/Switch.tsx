import * as SwitchPrimitive from "@radix-ui/react-switch";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
        className={cn(
            "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary rounded-none",
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitive.Thumb
            className={cn(
                "pointer-events-none block h-4 w-4 bg-on-surface shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5 rounded-none"
            )}
        />
    </SwitchPrimitive.Root>
));

Switch.displayName = SwitchPrimitive.Root.displayName;
