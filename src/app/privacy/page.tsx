import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { weddingConfig } from "@/config/wedding";
import { ArrowLeft, ShieldCheck, Database, HardDrive, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy & Data Notice — ${weddingConfig.couple.combinedNames} Wedding`,
  description: "Explanation of data handling and demonstration storage for this wedding microsite.",
};

export default function PrivacyPage() {
  const { privacy, rsvp, couple } = weddingConfig;

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 pt-24 pb-20 px-4 sm:px-6 bg-[#F7F4EC]">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Back link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#737F68] hover:text-[#202A24] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Invitation</span>
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88753] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparency &amp; Privacy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-normal tracking-tight">
              {privacy.title}
            </h1>
            <p className="text-xs text-[#737F68]">
              Effective Date: {privacy.lastUpdated}
            </p>
          </div>

          <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-6 sm:p-10 shadow-xs space-y-6 text-sm text-[#545A52] leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="font-serif text-xl text-[#202A24] font-medium">
                Information Collected
              </h2>
              <p>
                When responding to the wedding invitation of {couple.combinedNames}, you may optionally or requiredly provide:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Your full name and attendance confirmation (Accept / Decline).</li>
                <li>Number of guests in your party and their names.</li>
                <li>Dietary preferences or allergen notices.</li>
                <li>Optional contact details (email address and phone number).</li>
                <li>An optional personal note or blessing to the couple.</li>
              </ul>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#ECE8DD]">
              <div className="flex items-center gap-2 text-[#202A24]">
                <HardDrive className="w-4 h-4 text-[#A88753]" />
                <h2 className="font-serif text-xl font-medium">
                  Current Storage Mode: {rsvp.mode === "demo" ? "Demonstration (Local)" : "Production API"}
                </h2>
              </div>
              <p>{privacy.demoStorageNotice}</p>
              {rsvp.mode === "demo" && (
                <div className="p-3 bg-[#A88753]/10 border border-[#A88753]/30 rounded-xs text-xs text-[#545A52]">
                  Note for site owners: To deploy this wedding microsite for real guests, update <code>src/config/wedding.ts</code> to set <code>rsvp.mode = &apos;api&apos;</code> and configure <code>NEXT_PUBLIC_RSVP_ENDPOINT</code> in your environment.
                </div>
              )}
            </section>

            <section className="space-y-2 pt-4 border-t border-[#ECE8DD]">
              <div className="flex items-center gap-2 text-[#202A24]">
                <Database className="w-4 h-4 text-[#A88753]" />
                <h2 className="font-serif text-xl font-medium">
                  Purpose and Usage
                </h2>
              </div>
              <p>{privacy.dataUsageNotice}</p>
              <p>{privacy.retentionNotice}</p>
            </section>

            {rsvp.contactEmail && (
              <section className="space-y-2 pt-4 border-t border-[#ECE8DD]">
                <div className="flex items-center gap-2 text-[#202A24]">
                  <Mail className="w-4 h-4 text-[#A88753]" />
                  <h2 className="font-serif text-xl font-medium">
                    Questions &amp; Contact
                  </h2>
                </div>
                <p>
                  If you wish to update or remove your guest details, please reach out directly to the couple at{" "}
                  <a
                    href={`mailto:${rsvp.contactEmail}`}
                    className="text-[#202A24] font-medium underline"
                  >
                    {rsvp.contactEmail}
                  </a>.
                </p>
              </section>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
