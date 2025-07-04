
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  dataAiHint?: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, index * 150 + 50); // Staggered animation delay
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Card 
      className="w-full overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg 
                 border border-transparent hover:border-primary/30
                 transition-all duration-300 ease-out 
                 transform-gpu
                 motion-safe:hover:scale-[1.03] 
                 motion-safe:hover:shadow-2xl motion-safe:hover:shadow-primary/20
                 motion-safe:hover:rotate-x-[2deg] motion-safe:hover:-rotate-y-[1deg]"
    >
      <div 
        className={`transform transition-all duration-700 ease-out 
                    ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: isMounted ? '0ms' : `${index * 50}ms`}} // Ensure delay applies to initial mount if needed
      >
        {event.photoUrl && (
          <div className="relative aspect-video w-full">
            <Image
              src={event.photoUrl}
              alt={event.title}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={event.dataAiHint || "event image"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-t-xl"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl md:text-2xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="font-body text-sm md:text-base">{event.description}</CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}
