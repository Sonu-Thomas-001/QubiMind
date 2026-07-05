"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    description: "Perfect for small teams exploring multi-agent workflows.",
    price: "$49",
    period: "/month",
    features: [
      "Up to 3 Specialized Agents",
      "Standard RAG capabilities",
      "5GB Vector Database",
      "Community Support",
      "Basic Analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For scaling companies that need advanced coordination.",
    price: "$199",
    period: "/month",
    features: [
      "Unlimited Specialized Agents",
      "Advanced RAG & Tool Calling",
      "50GB Vector Database",
      "Priority Email Support",
      "Custom Workflows & Approvals",
      "Human-in-the-loop nodes",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Mission-critical AI infrastructure with maximum security.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Dedicated Success Manager",
      "Unlimited Vector Storage",
      "SOC2 & HIPAA Compliance",
      "SSO & Custom RBAC",
      "VPC Peering / On-Prem Deploy",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Transparent pricing for teams of all sizes
          </h2>
          <p className="text-lg text-muted-foreground">
            Start small and scale your AI workforce as your enterprise grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105 relative z-0' : 'border-border/50'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                    {plan.price}
                    <span className="ml-1 text-xl font-medium text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
