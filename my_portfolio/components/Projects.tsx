"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Document Tampering Detection",
    tech: "Python • OpenCV • Machine Learning",
    description: "Built a model to detect visual and structural tampering in documents using computer vision and ML techniques.",
    repo: "https://github.com/udaysingh21/DOCUMENT-TAMPERING-DETECTION",
    image: "./dtd.jpg",
  },
  // {
  //   title: "GeoCodeX",
  //   tech: "Flask • Nominatim API",
  //   description: "A web app to batch geocode addresses from CSV files—upload, process, and download with ease.",
  //   repo: "https://github.com/udaysingh21/GeoCodeX",
  //   image: "./geocodex.jpg",
  // },
  {
    title: "Virtual Medical Home",
    tech: "SpringBoot • React",
    description: "An online healthcare system designed to deliver medical services to both urban and remote areas.",
    repo: "https://github.com/DevikaShetty99/VirtualMedicalHub",
    image: "./vmh.jpg",
  },
  {
    title: "Machine Learning",
    tech: "Python • Machine Learning • Gradio",
    description: "A set of 7 ML projects in Python featuring regression and classification, with a focus on preprocessing, feature engineering, and model evaluation—fully documented and code-ready.",
    repo: "https://github.com/udaysingh21/ML-PROJECTS",
    image: "./ml.jpg",
  },
  // {
  //   title: "Motion Detection App",
  //   tech: "Python • tkinter",
  //   description: "A desktop application that detects real-time motion using a connected camera, providing a simple interface for live monitoring.",
  //   repo: "https://github.com/udaysingh21/MOTION_DETECTION_APP",
  //   image: "./mdapp.jpg",
  // },
  // {
  //   title: "Student Database",
  //   tech: "Prisma • SQLite3",
  //   description: "A user-friendly desktop app to add, view, update, delete, and search student records in a local database.",
  //   repo: "https://github.com/udaysingh21/STUDENTS_DATABASE",
  //   image: "./sdb.jpg",
  // },
  // {
  //   title: "YouTube Sentiment Analysis",
  //   tech: "Pandas • Matplotlib • NLTK",
  //   description: "Summarize long articles into concise points using AI.",
  //   repo: "https://github.com/udaysingh21/YOUTUBE_SENTIMENT_ANALYSIS",
  //   image: "./youtube.jpg",
  // },
  {
    title: "Serverless App",
    tech: "AWS • Github Actions",
    description: "An end to end DevOps pipeline from code commit to code build.",
    repo: "https://github.com/udaysingh21/Serverless_App",
    image: "./serverless.jpg",
  },
  {
    title: "Data Structures and Algorithms",
    tech: "Data Structure • Algortihms • Pyhthon",
    description: "A proper repository for learning Data Structures and Algorithms with Python.",
    repo: "https://github.com/udaysingh21/DSA_FEB_2",
    image: "./dsa.jpg",
  },
  {
    title: "Automating DataFixes using AI",
    tech: "RAG • AI • Python • LangChain",
    description: "It automates data-fix processes, dramatically reducing manual effort and resolution time.",
    repo: "https://github.com/udaysingh21/Datafix",
    image: "./adf.jpg",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - visibleCount;

  const handleNext = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Things I’ve Built 🚀</h2>

        <div className="flex justify-between items-center mb-6 gap-4">
          <Button onClick={handlePrev} disabled={index === 0} variant="secondary">
            ◀ Previous
          </Button>
          <div className="text-sm text-gray-600">
            {index + 1}-{Math.min(index + visibleCount, projects.length)} of {projects.length}
          </div>
          <Button
            onClick={handleNext}
            disabled={index >= maxIndex}
            variant="secondary"
          >
            Next ▶
          </Button>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
            }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className={`px-2 flex-shrink-0 ${
                  visibleCount === 1 ? 'w-full' : 'w-1/2'
                }`}
              >
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <Card className="h-full shadow hover:shadow-lg transition overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.tech}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{project.description}</p>
                      <Button asChild variant="outline">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;