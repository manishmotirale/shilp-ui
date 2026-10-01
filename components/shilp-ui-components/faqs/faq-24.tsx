"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const tabs = ["Product", "Pricing", "Security"];

const faqData: Record<
  string,
  { question: string; answer: string }[]
> = {
  Product: [
    {
      question: "What platforms do you support?",
      answer:
        "We support web, iOS, Android, Windows, and macOS. Our apps sync seamlessly across all platforms in real-time.",
    },
    {
      question: "Can I import from other tools?",
      answer:
        "Yes! We support imports from Notion, Trello, Asana, Jira, and many more. Our migration wizard makes switching easy.",
    },
    {
      question: "Is there offline support?",
      answer:
        "Our desktop and mobile apps work offline. Changes sync automatically when you reconnect to the internet.",
    },
  ],
  Pricing: [
    {
      question: "Is there a free plan?",
      answer:
        "Yes! Our free plan includes core features, 1GB storage, and up to 3 team members. Perfect for getting started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual enterprise plans.",
    },
    {
      question: "Do you offer educational discounts?",
      answer:
        "Yes! Students and educators get 50% off. Verified educational institutions can get free access for classrooms.",
    },
  ],
  Security: [
    {
      question: "How is my data encrypted?",
      answer:
        "All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We use zero-knowledge architecture for sensitive data.",
    },
    {
      question: "Do you support SSO?",
      answer:
        "Enterprise plans include SSO with SAML 2.0 and OAuth. We integrate with Okta, Azure AD, Google, and more.",
    },
    {
      question: "Are you GDPR compliant?",
      answer:
        "Yes, we're fully GDPR compliant. We also comply with CCPA, HIPAA, and SOC 2 Type II requirements.",
    },
  ],
};

export default function Faq24() {
  const [activeTab, setActiveTab] = useState("Product");

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Topics
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Find answers organized by topic.
          </p>
        </div>

        <div className="mb-7 flex justify-center">
          <div className="flex overflow-x-auto rounded-full border border-white/[0.07] bg-white/[0.02] p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-full px-5 py-2 text-xs font-medium transition",
                  activeTab === tab
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-600 hover:text-zinc-300"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-3 sm:p-4">
          <Accordion
            key={activeTab}
            type="single"
            collapsible
            className="space-y-2"
          >
            {faqData[activeTab].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-transparent bg-white/[0.02] px-4 transition-colors data-[state=open]:border-violet-400/15 data-[state=open]:bg-white/[0.035]"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-medium text-zinc-200 hover:no-underline hover:text-white [&>svg]:text-zinc-600 data-[state=open]:[&>svg]:text-violet-300">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-4 text-sm leading-6 text-zinc-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}