"use client";

import Link from 'next/link';
import { MotionGateLogo } from './motion-gate-logo';
import { Button } from '@/components/ui/button';

interface MotionGateButtonProps {
  href: string;
  children: React.ReactNode;
}

export function MotionGateButton({ href, children }: MotionGateButtonProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        asChild
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground overflow-hidden rounded-lg
                   bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90
                   shadow-lg
                   transition-all duration-300 ease-in-out
                   transform motion-safe:hover:scale-110 hover:shadow-xl
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <a>
          <MotionGateLogo className="mr-3 h-6 w-6" /> 
          {children}
        </a>
      </Button>
    </Link>
  );
}
