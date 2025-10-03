"use client"

import { Button } from "@/components/ui/button"
import { GlitterText } from "@/components/glitter-text"
import { BookOpen, Sparkles, GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading with glitter effect */}
        <div className="space-y-4">
          <GlitterText as="h1" className="text-6xl md:text-8xl font-bold leading-tight">
            Notely
          </GlitterText>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your academic journey with intelligent note organization by subject and semester
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 py-8">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Subject Organization</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <GraduationCap className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Semester Tracking</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Smart Interface</span>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="glitter-effect px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Start Taking Notes
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold backdrop-blur-sm hover:bg-accent/10 transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Stats or testimonial */}
        <div className="pt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by students worldwide</p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <GlitterText className="text-2xl font-bold">10K+</GlitterText>
              <p className="text-sm text-muted-foreground">Notes Created</p>
            </div>
            <div>
              <GlitterText className="text-2xl font-bold">500+</GlitterText>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div>
              <GlitterText className="text-2xl font-bold">50+</GlitterText>
              <p className="text-sm text-muted-foreground">Universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
