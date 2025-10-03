"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { GlitterText } from "@/components/glitter-text"
import { BookOpen, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function TranslucentHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-translucent border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <GlitterText className="text-2xl font-bold">Notely</GlitterText>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#subjects" className="text-sm font-medium hover:text-primary transition-colors">
              Subjects
            </a>
            <a href="#notes" className="text-sm font-medium hover:text-primary transition-colors">
              My Notes
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" className="glitter-effect hover:bg-accent/20 transition-all duration-300">
              Sign In
            </Button>
            <Button className="hidden sm:inline-flex glitter-effect bg-primary hover:bg-primary/90 transition-all duration-300">
              Get Started
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 backdrop-translucent">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#subjects" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Subjects
              </a>
              <a href="#notes" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                My Notes
              </a>
              <div className="pt-2">
                <Button className="w-full glitter-effect bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
