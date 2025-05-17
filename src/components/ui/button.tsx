
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
        yellow: "bg-udda-yellow text-black font-bold hover:bg-udda-yellow/90 shadow-md",  // Improved contrast with black text
        purple: "bg-udda-purple text-white hover:bg-udda-purple/90 shadow-md font-bold", // Added font-bold for better readability
        orange: "bg-udda-orange text-white hover:bg-udda-orange/90 shadow-md font-bold", // Added font-bold for better readability
        blue: "bg-udda-blue text-white hover:bg-udda-blue/90 shadow-md font-bold", // Added font-bold for better readability
        green: "bg-udda-green text-white hover:bg-udda-green/90 shadow-md font-bold", // Added font-bold for better readability
        coral: "bg-udda-coral text-white hover:bg-udda-coral/90 shadow-md font-bold", // Added font-bold for better readability
        lavender: "bg-udda-lavender text-white hover:bg-udda-lavender/90 shadow-md font-bold border border-white/10", // Added font-bold and subtle border
        // Higher contrast variants
        "high-contrast-yellow": "bg-yellow-500 text-black hover:bg-yellow-600 font-bold shadow-md",
        "high-contrast-blue": "bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-md",
        "high-contrast-green": "bg-green-600 text-white hover:bg-green-700 font-bold shadow-md",
        "high-contrast-purple": "bg-purple-700 text-white hover:bg-purple-800 font-bold shadow-md",
        // Adding even higher contrast variants for the Couple's Blame Buffer page
        "ultra-lavender": "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] font-bold shadow-md border border-white/20 text-base",
        "ultra-yellow": "bg-yellow-400 text-black hover:bg-yellow-500 font-bold shadow-md border border-black/10 text-base",
        "ultra-purple": "bg-[#9333EA] text-white hover:bg-[#7E22CE] font-bold shadow-md border border-white/20 text-base",
        "ultra-blue": "bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold shadow-md border border-white/20 text-base",
        // Logo button variant
        "logo": "bg-white text-black font-bold shadow-md hover:bg-gray-50 border border-gray-100",
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
