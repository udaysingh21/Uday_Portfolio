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

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>Next.js • Tailwind CSS • ShadCN UI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                A personal website to showcase my work, experience, and blogs with a modern UI.
              </p>
              <Button asChild variant="outline">
                <a href="https://github.com/yourusername/portfolio" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Platform</CardTitle>
              <CardDescription>React • Firebase • Markdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                A simple blogging platform with live Markdown editing and Google Auth support.
              </p>
              <Button asChild variant="outline">
                <a href="https://github.com/yourusername/blog-platform" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
