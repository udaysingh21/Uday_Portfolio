"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-16 bg-white text-black"
    >
      <Card className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 border-none shadow-none">
        {/* Text Section */}
        <CardContent className="flex-1 text-center md:text-left p-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Uday 👋</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            A passionate Software Developer & DSA Instructor.
          </p>
          <p className="text-md text-gray-600">
            I enjoy building clean UIs, solving problems, and sharing insights through writing.
          </p>
        </CardContent>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Uday Profile"
            width={240}
            height={240}
            className="rounded-full shadow-md border"
          />
        </div>
      </Card>
    </section>
  );
};

export default Hero;
