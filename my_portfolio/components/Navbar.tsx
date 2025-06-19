"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-50 z-50">
      <div className="max-w-8xl mx-5 px-4 py-3 flex items-center">
        
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-1">
        <Image
            src="/profile.jpg"
            alt="Uday Logo"
            width={32}
            height={32}
            className="rounded-full"
        />
        {/* <span className="text-lg font-bold text-gray-800">Uday.dev</span> */}
        </Link>

        {/* Nav Links */}
        <div className="space-x-4 hidden md:flex ml-auto px-4 text-black">
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
      </div>
    </nav>
  );
};

export default Navbar;
