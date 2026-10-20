"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

import WeddingLogo from "./wedding-logo";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#home", label: "Home" },
    weddingConfig.story.enabled && { href: "/#story", label: "Our Story" },
    weddingConfig.schedule.enabled && { href: "/#schedule", label: "Celebration" },
    { href: "/#venue", label: "Venue" },
    weddingConfig.gallery.enabled && { href: "/#gallery", label: "Gallery" },
    weddingConfig.dressGuidance.enabled && { href: "/#attire", label: "Attire" },
    weddingConfig.travel.enabled && { href: "/#travel", label: "Travel" },
    weddingConfig.faq.enabled && { href: "/#faq", label: "FAQ" },
  ].filter(Boolean) as { href: string; label: string }[];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFEFA]/95 backdrop-blur-md shadow-xs border-b border-[#DCD8CD] py-2.5 sm:py-3"
          : "bg-[#F7F4EC]/92 backdrop-blur-md border-b border-[#DCD8CD]/40 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 text-[#202A24] transition-all"
          aria-label={`${weddingConfig.couple.combinedNames} Wedding Home`}
        >
          <WeddingLogo size="sm" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#202A24]">
              {weddingConfig.couple.combinedNames}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#737F68] -mt-0.5">
              {weddingConfig.event.city}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-7 text-xs lg:text-sm font-medium tracking-wide text-[#545A52]"
          aria-label="Main Navigation"
        >
          {isHomePage ? (
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#202A24] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A88753] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link
              href="/"
              className="hover:text-[#202A24] transition-colors py-1"
            >
              ← Back to Invitation
            </Link>
          )}

          {/* RSVP Button */}
          {weddingConfig.rsvp.enabled && (
            <Link
              href="/rsvp"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-widest font-semibold transition-all shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#A88753] group-hover:text-white" />
              <span>RSVP</span>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {weddingConfig.rsvp.enabled && !mobileMenuOpen && (
            <Link
              href="/rsvp"
              className="px-3 py-1.5 rounded-xs bg-[#202A24] text-[#FFFEFA] text-xs uppercase tracking-wider font-medium"
            >
              RSVP
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#202A24] hover:text-[#A88753] transition-colors rounded-xs focus:ring-2 focus:ring-[#A88753]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-[#202A24]/40 backdrop-blur-xs md:hidden z-50 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FFFEFA] border-b border-[#DCD8CD] px-6 py-8 shadow-lg max-h-[calc(100vh-61px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <WeddingLogo size="md" />
              </div>
              <span className="inline-block text-xs uppercase tracking-widest text-[#A88753] font-medium mb-1">
                {weddingConfig.couple.eyebrow}
              </span>
              <p className="font-serif text-2xl text-[#202A24]">
                {weddingConfig.couple.combinedNames}
              </p>
              <p className="text-xs text-[#737F68] mt-1">
                {weddingConfig.event.dateFormatted} • {weddingConfig.event.city}
              </p>
            </div>

            <div className="w-12 h-px bg-[#DCD8CD] mx-auto mb-6" />

            <nav className="flex flex-col gap-4 text-center">
              {isHomePage ? (
                navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="py-2 text-base font-medium text-[#202A24] hover:text-[#A88753] transition-colors border-b border-[#ECE8DD]"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="py-2 text-base font-medium text-[#202A24] hover:text-[#A88753] transition-colors border-b border-[#ECE8DD]"
                >
                  ← Back to Invitation
                </Link>
              )}

              {weddingConfig.rsvp.enabled && (
                <Link
                  href="/rsvp"
                  onClick={handleLinkClick}
                  className="mt-4 w-full py-3 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-sm uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-current text-[#A88753]" />
                  <span>Respond to RSVP</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
