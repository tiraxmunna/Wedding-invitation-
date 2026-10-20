import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

export default function CoupleStory() {
  const { story } = weddingConfig;

  if (!story.enabled) return null;

  return (
    <section
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EC] relative overflow-hidden"
      aria-label="Our Story"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
            Chapters of Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            {story.headline}
          </h2>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Narrative & Photo Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo with textured frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-2 border border-[#A88753]/40 rounded-xs transform rotate-1 hidden sm:block pointer-events-none" />
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden bg-[#FFFEFA] p-2.5 border border-[#DCD8CD] shadow-sm">
                <Image
                  src="/images/story.jpg"
                  alt={`Couple photo of ${weddingConfig.couple.combinedNames}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center rounded-xs"
                />
              </div>
            </div>
          </div>

          {/* Story Narrative & Milestones */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-[#545A52]">
            {story.pullQuote && (
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#202A24] border-l-2 border-[#A88753] pl-5 py-1">
                {story.pullQuote}
              </blockquote>
            )}

            <div className="space-y-4 text-base sm:text-lg font-light leading-relaxed">
              {story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Milestones Timeline */}
            {story.milestones && story.milestones.length > 0 && (
              <div className="pt-6 border-t border-[#DCD8CD] space-y-6">
                <h3 className="font-serif text-xl text-[#202A24] font-normal tracking-wide">
                  Milestones Along the Way
                </h3>
                <div className="space-y-5">
                  {story.milestones.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="min-w-16 pt-0.5">
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#A88753] border border-[#A88753]/50 px-2 py-0.5 rounded-xs bg-[#FFFEFA]">
                          {m.year}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-base text-[#202A24]">
                          {m.title}
                        </h4>
                        <p className="text-sm text-[#545A52] leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
