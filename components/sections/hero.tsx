"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="secondary" className="px-3 py-1 text-sm border border-primary/20 bg-primary/10 text-primary flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            QubiMind 2.0 is now available
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto mb-6"
        >
          The Operating System for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Intelligent Workflows
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Deploy a fleet of autonomous, collaborative AI agents that automate research, coding, planning, and execution across your entire enterprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base group">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base">
            <Terminal className="mr-2 h-4 w-4" />
            View Documentation
          </Button>
        </motion.div>
        
        {/* Mockup / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm p-2 shadow-2xl">
            <div className="rounded-lg overflow-hidden border border-border bg-card aspect-video relative flex flex-col">
              <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-background border border-border rounded-md px-3 py-1 text-xs text-muted-foreground w-64 text-center truncate">
                  qubimind-coordinator.app
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col md:flex-row gap-6 bg-grid-pattern">
                {/* Mockup content to simulate the AI Dashboard */}
                <div className="w-full md:w-64 flex flex-col gap-4">
                  <div className="h-8 bg-muted rounded-md w-full animate-pulse opacity-50" />
                  <div className="h-8 bg-muted rounded-md w-3/4 animate-pulse opacity-50" />
                  <div className="h-8 bg-muted rounded-md w-5/6 animate-pulse opacity-50" />
                  <div className="h-32 bg-primary/5 rounded-md w-full border border-primary/20 mt-auto" />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-48 bg-muted/30 rounded-xl border border-border w-full flex items-center justify-center">
                    <span className="text-muted-foreground/50 font-mono text-sm">Agent Visualization Graph</span>
                  </div>
                  <div className="flex-1 flex gap-4">
                    <div className="flex-1 bg-muted/30 rounded-xl border border-border" />
                    <div className="flex-1 bg-muted/30 rounded-xl border border-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
