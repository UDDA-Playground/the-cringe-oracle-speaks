
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-udda-blue font-semibold underline-offset-4 hover:underline", // Changed from "text-primary" to "text-udda-blue" for better contrast
        yellow: "bg-udda-yellow text-gray-900 hover:bg-udda-yellow/90 font-bold shadow-md",  // Added shadow
        purple: "bg-udda-purple text-white hover:bg-udda-purple/90 shadow-md", // Added shadow
        orange: "bg-udda-orange text-white hover:bg-udda-orange/90 shadow-md", // Added shadow
        blue: "bg-udda-blue text-white hover:bg-udda-blue/90 shadow-md", // Added shadow
        green: "bg-udda-green text-white hover:bg-udda-green/90 shadow-md", // Added shadow
        coral: "bg-udda-coral text-white hover:bg-udda-coral/90 shadow-md", // Added shadow
        lavender: "bg-udda-lavender text-white hover:bg-udda-lavender/90 shadow-md", // Added shadow
        // Adding high contrast variants
        "high-contrast-yellow": "bg-yellow-500 text-black hover:bg-yellow-600 font-bold shadow-md",
        "high-contrast-blue": "bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-md",
        "high-contrast-green": "bg-green-600 text-white hover:bg-green-700 font-bold shadow-md",
        "high-contrast-purple": "bg-purple-700 text-white hover:bg-purple-800 font-bold shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
