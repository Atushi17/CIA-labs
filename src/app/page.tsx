"use client";

import { useState, useEffect } from "react";
import { MotionGateButton } from "@/components/motion-gate-button";
import { EventCard } from "@/components/event-card";
import eventsData from "@/data/events.json";
import { MotionGateLogo } from "@/components/motion-gate-logo"; // Import the logo

interface EventItem {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  dataAiHint?: string;
  animationType: string;
}

export default function HomePage() {
  const events: EventItem[] = eventsData;
  const redirectionUrl = "www.google.com";

  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [subHeaderLoaded, setSubHeaderLoaded] = useState(false);
  const [buttonLoaded, setButtonLoaded] = useState(false);
  const [eventsTitleLoaded, setEventsTitleLoaded] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeaderLoaded(true), 50);
    const timer2 = setTimeout(() => setSubHeaderLoaded(true), 200);
    const timer3 = setTimeout(() => setButtonLoaded(true), 350);
    const timer4 = setTimeout(() => setEventsTitleLoaded(true), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background font-body">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-8 py-12 sm:py-16 text-center">
        <div className="relative group mb-12 sm:mb-16 w-full flex justify-center">
          <header className="relative w-full max-w-3xl">
            {/* Glass effect background */}
            <div
              aria-hidden="true"
              className={`absolute -inset-x-4 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8
                          bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15
                          dark:from-primary/20 dark:via-primary/15 dark:to-accent/20
                          backdrop-blur-lg 
                          rounded-[2.5rem] sm:rounded-[3rem]
                          shadow-2xl shadow-primary/15
                          transform group-hover:rotate-[-1deg] group-hover:skew-x-0 group-hover:scale-[1.02] group-hover:shadow-primary/25
                          transition-all duration-[700ms] ease-out
                          flex items-center justify-center overflow-hidden 
                          ${
                            headerLoaded
                              ? "opacity-100 scale-100 rotate-[-2deg] skew-x-[-1deg]"
                              : "opacity-0 scale-90 rotate-[-5deg] skew-x-[-3deg]"
                          }`}
            >
              <MotionGateLogo
                className={`
                  text-primary/10 dark:text-primary/15 
                  opacity-40 group-hover:opacity-50
                  w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 
                  transform group-hover:scale-105 transition-all duration-[700ms] ease-out
                  ${
                    headerLoaded ? "opacity-40 scale-100" : "opacity-0 scale-90"
                  }`}
                style={{ filter: "blur(2px)" }}
                aria-hidden="true"
              />
            </div>

            {/* Header Text Content */}
            <div className="relative z-10 py-6 px-4 sm:py-8 sm:px-6">
              <h1
                className={`font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 transition-all duration-700 ease-out
                            ${
                              headerLoaded
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                            }`}
                style={{
                  textShadow:
                    "0 2px 6px rgba(0,0,0,0.35), 0 0 10px hsl(var(--primary) / 0.15)",
                }}
              >
                CIA <span className="text-primary">Labs</span>
              </h1>
              <p
                className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out
                            ${
                              subHeaderLoaded
                                ? "opacity-100 translate-y-0 delay-200"
                                : "opacity-0 translate-y-5"
                            }`}
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
              >
                Join US on the Latest Event and Callenges and many more! Click
                below to learn more
              </p>
            </div>
          </header>
        </div>

        <div
          className={`mb-16 sm:mb-20 transition-all duration-700 ease-out transform
                      ${
                        buttonLoaded
                          ? "opacity-100 scale-100 delay-300"
                          : "opacity-0 scale-90"
                      }`}
        >
          <MotionGateButton href={redirectionUrl}>Dashboard</MotionGateButton>
        </div>

        {events.length > 0 && (
          <section className="w-full max-w-6xl">
            <h2
              className={`font-headline text-3xl sm:text-4xl font-semibold text-foreground mb-8 sm:mb-12 transition-all duration-700 ease-out
                          ${
                            eventsTitleLoaded
                              ? "opacity-100 translate-y-0 delay-500"
                              : "opacity-0 translate-y-5"
                          }`}
            >
              Featured Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="w-full py-8 text-center text-muted-foreground border-t border-[hsl(var(--border))]">
        <p>Designed for Delight by Harsh ♠️</p>
      </footer>
    </div>
  );
}
