"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BrainCircuit, Shield, Zap } from "lucide-react";

const REASONS = [
  {
    title: "Unmatched Speed",
    description: "Accelerate your workflows with AI agents that operate at the speed of thought, reducing complex tasks to seconds.",
    icon: Zap,
  },
  {
    title: "Enterprise Grade Security",
    description: "Built from the ground up with SOC2 compliance, granular RBAC, and end-to-end encryption to protect your proprietary data.",
    icon: Shield,
  },
  {
    title: "Scalable Intelligence",
    description: "Deploy an unlimited number of specialized agents that seamlessly collaborate and scale with your organizational needs.",
    icon: BrainCircuit,
  },
];

export function WhyQubimind() {
  return (
    <section id="why" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose QubiMind
          </h2>
          <p className="text-lg text-muted-foreground">
            The foundation for your enterprise AI workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
