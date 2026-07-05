"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-card border border-border/50 rounded-3xl p-10 md:p-16 shadow-lg"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build your AI workforce?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join forward-thinking enterprises automating their complex workflows with QubiMind&apos;s multi-agent platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
