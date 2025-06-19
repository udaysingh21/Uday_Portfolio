import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <><>
      <>
        <Navbar />
      </>

      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Blogs />
      <Contact />

      </>
        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Uday. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </footer>
      </>

    
  );
}
