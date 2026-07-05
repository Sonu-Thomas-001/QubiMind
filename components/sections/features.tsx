"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, GitMerge, Lock, MessageSquare, ShieldAlert, Zap } from "lucide-react";

const FEATURES = [
  {
    title: "Multi-Agent Collaboration",
    description: "Deploy swarms of specialized agents that work together, passing context and tasks seamlessly to achieve complex goals.",
    icon: GitMerge,
  },
  {
    title: "Long-Term Memory",
    description: "Agents remember past interactions, user preferences, and enterprise data across sessions using advanced vector databases.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise RAG",
    description: "Securely ground your agents in company knowledge bases, documents, and real-time APIs.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation",
    description: "Design complex conditional workflows where agents can trigger tools, await human approval, or execute code.",
    icon: Zap,
  },
  {
    title: "Bank-Grade Security",
    description: "Granular RBAC, audit logs, and SOC2 compliant infrastructure to ensure your proprietary data never leaks.",
    icon: Lock,
  },
  {
    title: "Human-in-the-Loop",
    description: "Set up interrupt nodes requiring explicit manager approval before agents take high-stakes actions.",
    icon: ShieldAlert,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for the modern enterprise
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to orchestrate complex AI workflows safely and reliably at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-background/50 hover:bg-background transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
