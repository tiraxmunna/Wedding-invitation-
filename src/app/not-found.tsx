import React from "react";
import Link from "next/link";
import { weddingConfig } from "@/config/wedding";
import { Heart, ArrowLeft } from "lucide-react";

import WeddingLogo from "@/components/wedding-logo";

export default function NotFound() {
  const { couple } = weddingConfig;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F4EC] px-4 sm:px-6">
      <div className="max-w-md w-full bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-8 sm:p-10 text-center shadow-md space-y-6 relative heirloom-card-inner-border">
        <div className="flex justify-center">
          <WeddingLogo size="lg" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
            404 Error
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-normal">
            Page Not Found
          </h1>
          <p className="text-sm text-[#545A52] font-light leading-relaxed">
            The page or invitation link you are looking for could not be found or has moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Invitation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
