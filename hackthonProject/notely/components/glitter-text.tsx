"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlitterTextProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function GlitterText({ children, className, as: Component = "span" }: GlitterTextProps) {
  return (
    <Component
      className={cn(
        "glitter-effect bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold",
        className,
      )}
    >
      {children}
    </Component>
  )
}
