"use client";

import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is a multi-agent system?",
    answer: "A multi-agent system consists of multiple specialized AI agents (e.g., Researcher, Writer, Coder) that communicate and collaborate to solve complex problems. Unlike a single chatbot, agents can delegate tasks, verify each other's work, and execute multi-step workflows autonomously."
  },
  {
    question: "How do you ensure data security?",
    answer: "We employ enterprise-grade security including SOC2 compliance, at-rest and in-transit encryption, and strict Role-Based Access Control (RBAC). Your proprietary data used in RAG is never used to train foundational models."
  },
  {
    question: "Can agents take actions in our existing tools?",
    answer: "Yes. Using Tool Calling and integrations, agents can interact with external APIs, execute SQL queries, send emails, or update CRM records. You can enforce 'Human-in-the-loop' approvals before any destructive or high-stakes action is taken."
  },
  {
    question: "Which LLMs do you support?",
    answer: "Our orchestration engine is model-agnostic. We support leading models from OpenAI, Anthropic, and Google (Gemini). You can configure different models for different agents based on task requirements and cost constraints."
  },
  {
    question: "Is there an on-premise deployment option?",
    answer: "Yes, for our Enterprise tier customers, we offer VPC peering and dedicated on-premise deployment options to meet strict regulatory and compliance requirements."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about QubiMind and multi-agent workflows.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
