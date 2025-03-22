"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  
  // Extract role from user metadata or use 'student' as default
  const role = user?.publicMetadata?.role as string || 'student';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-card shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and School Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Harmony Unique School Logo" width={40} height={40} />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-foreground">Harmony Unique School</h1>
                <p className="text-xs text-muted-foreground">Educate the mind, educate the heart</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:text-primary font-medium">
              Programs
            </Link>
            <Link href="/admissions" className="text-foreground hover:text-primary font-medium">
              Admissions
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium">
              Contact
            </Link>
            
            {/* Conditional rendering based on auth state */}
            {isSignedIn ? (
              <Link
                href={`/${role}`}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/sign-in"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground hover:bg-secondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground hover:bg-secondary"
            >
              About
            </Link>
            <Link
              href="/programs"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground hover:bg-secondary"
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground hover:bg-secondary"
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground hover:bg-secondary"
            >
              Contact
            </Link>
            
            {/* Conditional rendering for mobile menu */}
            {isSignedIn ? (
              <Link
                href={`/${role}`}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/sign-in"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default PublicNavbar;