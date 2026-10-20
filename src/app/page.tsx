import React from "react";
import SiteHeader from "@/components/site-header";
import HeroInvitation from "@/components/hero-invitation";
import WelcomeNote from "@/components/welcome-note";
import WeddingCountdown from "@/components/wedding-countdown";
import CoupleStory from "@/components/couple-story";
import EventSchedule from "@/components/event-schedule";
import VenueDetails from "@/components/venue-details";
import PhotoGallery from "@/components/photo-gallery";
import DressGuidance from "@/components/dress-guidance";
import TravelAccommodation from "@/components/travel-accommodation";
import FaqAccordion from "@/components/faq-accordion";
import GiftInformation from "@/components/gift-information";
import RsvpCallToAction from "@/components/rsvp-call-to-action";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroInvitation />
        <WelcomeNote />
        <WeddingCountdown />
        <CoupleStory />
        <EventSchedule />
        <VenueDetails />
        <PhotoGallery />
        <DressGuidance />
        <TravelAccommodation />
        <FaqAccordion />
        <GiftInformation />
        <RsvpCallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
