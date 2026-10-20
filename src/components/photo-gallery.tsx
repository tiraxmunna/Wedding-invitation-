"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import GalleryLightbox from "./gallery-lightbox";
import { Maximize2, Camera } from "lucide-react";

export default function PhotoGallery() {
  const { gallery } = weddingConfig;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (!gallery.enabled || gallery.photos.length === 0) return null;

  const handleOpen = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleClose = () => {
    if (activePhotoIndex !== null) {
      const lastIndex = activePhotoIndex;
      setActivePhotoIndex(null);
      // Restore focus to thumbnail button that opened the lightbox
      setTimeout(() => {
        triggerRefs.current[lastIndex]?.focus();
      }, 50);
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % gallery.photos.length);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + gallery.photos.length) % gallery.photos.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFEFA] border-b border-[#DCD8CD] relative"
      aria-label="Photo Gallery"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#A88753]" />
            <span>Curated Glimpses</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            {gallery.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#545A52] font-light">
            {gallery.intro}
          </p>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Editorial Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {gallery.photos.map((photo, index) => {
            // Varied heights for editorial collage rhythm
            const isTall = index === 0 || index === 4;
            const aspectClass = isTall
              ? "aspect-[3/4]"
              : index % 2 === 0
              ? "aspect-square"
              : "aspect-[4/3]";

            return (
              <button
                key={photo.id}
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                type="button"
                onClick={() => handleOpen(index)}
                className="group relative block w-full rounded-xs overflow-hidden bg-[#DCE1D5] border border-[#DCD8CD] p-2 bg-[#FFFEFA] shadow-xs text-left focus:ring-2 focus:ring-[#A88753] transition-all hover:shadow-md hover:-translate-y-0.5"
                aria-label={`View photo: ${photo.alt}`}
              >
                <div className={`relative w-full ${aspectClass} overflow-hidden rounded-xs`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay with icon */}
                  <div className="absolute inset-0 bg-[#202A24]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-[#FFFEFA]/90 text-[#202A24] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#202A24]" />
                    </span>
                  </div>
                </div>

                {photo.caption && (
                  <p className="mt-2 text-xs text-[#737F68] font-light italic truncate px-1">
                    {photo.caption}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <GalleryLightbox
          photos={gallery.photos}
          activeIndex={activePhotoIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
