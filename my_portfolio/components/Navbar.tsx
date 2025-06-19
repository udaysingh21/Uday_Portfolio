"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-50 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <Image
            src="/profile.jpg"
            alt="Uday Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4 text-black">
          <Link href="#experience" className="text-lg font-medium px-5 hover:text-gray-700 transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-lg font-medium px-5 hover:text-gray-700 transition-colors">
            Projects
          </Link>
          <Link href="#education" className="text-lg font-medium px-5 hover:text-gray-700 transition-colors">
            Education
          </Link>
          <Link href="#blog" className="text-lg font-medium px-5 hover:text-gray-700 transition-colors">
            Blog
          </Link>
          <Link href="#contact" className="text-lg font-medium px-5 hover:text-gray-700 transition-colors">
            Contact
          </Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-black"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-black bg-gray-50">
          <Link
            href="#experience"
            className="block text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="block text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="block text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            href="#blog"
            className="block text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
