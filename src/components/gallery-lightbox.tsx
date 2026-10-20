"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/lib/types";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentPhoto = photos[activeIndex];

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#202A24]/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with counter & close button */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#FFFEFA] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-serif text-sm tracking-widest text-[#DCE1D5]">
          {activeIndex + 1} / {photos.length}
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="p-2 text-[#FFFEFA] hover:text-[#A88753] transition-colors rounded-full bg-[#202A24]/60 hover:bg-[#202A24] focus:ring-2 focus:ring-[#A88753]"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 p-2.5 sm:p-3 text-[#FFFEFA] hover:text-[#A88753] transition-colors rounded-full bg-[#202A24]/60 hover:bg-[#202A24] z-10 focus:ring-2 focus:ring-[#A88753]"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-xs overflow-hidden bg-black/40">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            sizes="(max-width: 1200px) 90vw, 1000px"
            className="object-contain"
            priority
          />
        </div>

        {currentPhoto.caption && (
          <p className="mt-3 text-center text-sm sm:text-base text-[#DCE1D5] font-light max-w-xl">
            {currentPhoto.caption}
          </p>
        )}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 p-2.5 sm:p-3 text-[#FFFEFA] hover:text-[#A88753] transition-colors rounded-full bg-[#202A24]/60 hover:bg-[#202A24] z-10 focus:ring-2 focus:ring-[#A88753]"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
