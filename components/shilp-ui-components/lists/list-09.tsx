"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ListItem {
  id: string;
  question: string;
  answer: string;
}

interface List09Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.",
  },
  {
    id: "3",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
  },
];

export default function List09({ items = ITEMS, className }: List09Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              index !== items.length - 1 && "border-b border-white/[0.06]",
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full items-center justify-between gap-4 p-5 text-left",
                "transition-colors duration-200",
                "hover:bg-white/[0.025]",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-violet-400/40",
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  isOpen ? "text-white" : "text-zinc-300",
                )}
              >
                {item.question}
              </span>

              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full",
                  "border border-white/[0.06] bg-white/[0.025]",
                  "text-zinc-600 transition-all duration-200",
                  isOpen &&
                    "border-violet-400/15 bg-violet-400/10 text-violet-300",
                )}
              >
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </span>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}