import React from 'react';
import { cn } from '@/lib/utils';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A wrapper component that centers its children within a full-height, full-width container.
 * Ideal for positioning authentication forms in the main content area of a page layout.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ children, className }) => {
  return (
    <main className={cn("flex h-full items-center justify-center p-6 lg:p-8", className)}>
      {children}
    </main>
  );
};

export default AuthFormWrapper;
