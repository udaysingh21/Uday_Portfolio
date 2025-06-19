"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import { SiMedium } from "react-icons/si"; 

const Hero = () => {
  const greetings = [
    { text: "Hi", language: "English" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "Hola", language: "Spanish" },
    { text: "שלום", language: "Hebrew" },
    { text: "Hallo", language: "German" },
    { text: "Bonjour", language: "French" },
    { text: "Ciao", language: "Italian" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Привет", language: "Russian" },
    { text: "你好", language: "Chinese" },
    { text: "Olá", language: "Portuguese" }
  ];

  const quotes = [
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Programs must be written for people to read. – Harold Abelson",
  ];


  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setIsAnimating(false);
      }, 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [currentQuote, setCurrentQuote] = useState(0);
  const [isQuoteAnimating, setIsQuoteAnimating] = useState(false);

    useEffect(() => {
      const quoteInterval = setInterval(() => {
        setIsQuoteAnimating(true);
        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);
          setIsQuoteAnimating(false);
        }, 200);
      }, 4000); // longer delay than greetings
      return () => clearInterval(quoteInterval);
    }, []);


  return (
  <>
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-70 pt-0 bg-gray-50 text-black"
    > 
      {/* ✅ Quotes Section (inside hero but above the main content) */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center px-4 mt-30">
        <span
          className={`block text-xl md:text-2xl lg:text-3xl text-gray-800 italic transition-all duration-300 whitespace-nowrap ${
            isQuoteAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {quotes[currentQuote]}
        </span>
      </div>


      {/* Text Section */}
      <div className="flex-1 w-full md:w-1/2 text-center md:text-right space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span
            className={`inline-block transition-all duration-200 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}>
            {greetings[currentGreeting].text}
          </span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
          I'm Uday Vikram Singh 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A passionate <strong>Software Developer</strong> & <strong>DSA Instructor</strong>.
        </p>
        {/* <p className="text-md text-gray-600 md:px-0">
          Code. Clarity. Communication.
        </p> */}

        {/* Quick Stats */}
        <div className="mt-6 flex justify-center md:justify-end gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-xl">💼</span>
            <span className="whitespace-nowrap bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm shadow-sm">10+ months @ SAP Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="whitespace-nowrap bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm shadow-sm">M.Tech @ BITS Pilani</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🧑‍🏫</span>
            <span className="whitespace-nowrap bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm shadow-sm">40+ DSA students mentored</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center md:justify-end gap-4">
          <a
            href="/UdayVikramSingh_2YB.pdf"
            download
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Download CV
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/udaysingh21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/uday-vikram-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 text-blue-700 rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://medium.com/@uvs2111"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 text-black rounded-full transition-all"
              aria-label="Medium"
            >
              <SiMedium size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-center mt-10 md:mt-0 md:pl-35">
        <Image
          src="/profile.jpg"
          alt="Uday Profile"
          width={780}
          height={780}
          className="rounded-full border shadow-md"
        />
      </div>
    </section>
  </>
  );
};

export default Hero;
