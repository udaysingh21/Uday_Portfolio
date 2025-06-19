"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full py-20 px-6 md:px-16 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Mastering Linked List Problems</CardTitle>
              <CardDescription>Medium • Jan 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                A breakdown of commonly asked Linked List problems with real-world patterns and code.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://medium.com/@yourusername/linked-lists"
                  target="_blank"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Blog
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Blog 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Building a Modern Portfolio with Next.js</CardTitle>
              <CardDescription>Medium • May 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                How I designed and developed my own developer portfolio using modern tools like Next.js, Tailwind, and shadcn/ui.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://medium.com/@yourusername/nextjs-portfolio"
                  target="_blank"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Blog
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Add more blog cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
