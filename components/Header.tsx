import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/lemonTech-header-logo.png";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--text-gray) bg-background backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={80}
            priority
          />
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
          aria-label="Open Menu"
        >
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
        </button>
      </div>
    </header>
  );
};

export default Header;