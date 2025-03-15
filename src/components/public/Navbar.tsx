"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and School Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Harmony Unique School Logo" width={40} height={40} />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Harmony Unique School</h1>
                <p className="text-xs text-gray-500">Excellence in Education</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-harmonySky font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-harmonySky font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-harmonySky font-medium">
              Programs
            </Link>
            <Link href="/admissions" className="text-gray-700 hover:text-harmonySky font-medium">
              Admissions
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-harmonySky font-medium">
              Contact
            </Link>
            <Link
              href="/auth/sign-in"
              className="bg-harmonyPurple hover:bg-harmonyPurpleLight text-white px-4 py-2 rounded-md font-medium"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/programs"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              href="/auth/sign-in"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium bg-harmonyPurple text-white hover:bg-harmonyPurpleLight"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PublicNavbar;