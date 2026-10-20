"use client";

import React, { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const { faq } = weddingConfig;
  const [openIds, setOpenIds] = useState<string[]>(["faq-plus-one"]); // First item open by default

  if (!faq.enabled || faq.items.length === 0) return null;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EC] relative"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#A88753]" />
            <span>Guest Information</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            {faq.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#545A52] font-light">
            {faq.intro}
          </p>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.items.map((item) => {
            const isOpen = openIds.includes(item.id);
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs overflow-hidden shadow-xs transition-colors hover:border-[#A88753]/60"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#202A24] hover:text-[#A88753] transition-colors focus:ring-2 focus:ring-[#A88753]"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A88753] shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#545A52] font-light leading-relaxed border-t border-[#ECE8DD] ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
