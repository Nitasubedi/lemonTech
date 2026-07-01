"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/lemonTech-header-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null); // Ref to capture the header container

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle clicking outside of the header component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Only bind the event listener if the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header 
      ref={headerRef} // Attached the ref here
      className="sticky top-0 z-50 w-full border-b border-(--text-gray) bg-background backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" width={200} height={80} priority />
          {/* <span className="text-xl font-bold text-gray-900">
            YourCompany
          </span> */}
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-bold text-foreground transition-colors duration-300 hover:text-(--lemon-yellow)"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-(--lemon-yellow) px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-(--lemon-yellow)/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--lemon-yellow) focus:ring-offset-2"
          >
            Get Started
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border p-2 md:hidden"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            /* Close/X Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-(--text-gray) bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-md font-bold text-foreground transition-colors duration-300 hover:text-(--lemon-yellow)"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-(--lemon-yellow) px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-(--lemon-yellow)/90"
              onClick={() => setIsOpen(false)}
            >
              Get Started
              <span>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;