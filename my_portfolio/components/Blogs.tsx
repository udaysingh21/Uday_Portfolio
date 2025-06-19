"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    {
      id: 1,
      title: "Scholar @ SAP LABS Interview Experience",
      description:
        "Interview experience for the SAP Labs Scholar Program, including technical and HR rounds, preparation tips, and insights into the interview process...",
      link: "https://medium.com/@uvs2111/scholar-sap-labs-interview-experience-184e10116382",
      pubDate: "Jan 23, 2024",
      readTime: "4 min read",
      thumbnail:
        "./sap.png",
      categories: ["SAP Labs", "Interview Experience", "Scholar Program", "Tech Interviews", "Interview Experience"],
    },
    {
      id: 2,
      title: "Internship Interview Experience @ OpenPlay Technologies",
      description:
        "Detailed account of my internship interview at OpenPlay Technologies, covering the technical challenges faced, problem-solving strategies, and key takeaways...",
      link: "https://medium.com/@uvs2111/internship-interview-experience-at-openplay-technologies-80504d01489a",
      pubDate: "March 21, 2024",
      readTime: "3 min read",
      thumbnail:
        "./openplay.png",
      categories: ["OpenPlay", "Internship", "Data Structures", "Algorithms", "Python Developer Intern"],
    },
    {
      id: 3,
      title: "From Code to Cloud: Building a Complete CI/CD Pipeline Using AWS Lambda, Serverless Framework & GitHub Actions",
      description:
        "A comprehensive guide on setting up a CI/CD pipeline using AWS Lambda, Serverless Framework, and GitHub Actions, including step-by-step instructions and best practices...",
      link: "https://medium.com/@uvs2111/from-code-to-cloud-building-a-complete-ci-cd-pipeline-using-aws-lambda-serverless-framework-4a29e7ef2221",
      pubDate: "April 9, 2025",
      readTime: "4 min read",
      thumbnail:
        "./devops.png",
      categories: ["Devops", "Cloud", "AWS Lambda", "Serverless Framework", "GitHub Actions"],
    },
    {
      id: 4,
      title: "Catching What Eyes Can’t See: Visual Regression Testing for Modern Web Apps",
      description:
        "An in-depth exploration of visual regression testing techniques for modern web applications, including tools, frameworks, and best practices to ensure UI consistency...",
      link: "https://medium.com/@uvs2111/catching-what-eyes-cant-see-visual-regression-testing-for-modern-web-apps-b1ffa5fb477c",
      pubDate: "May 12, 2025",
      readTime: "6 min read",
      thumbnail:
        "./visual.png",
      categories: ["Database", "Performance"],
    },
  ];

  const cardsPerView = 2;
  const maxIndex = Math.max(0, blogs.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleBlogs = blogs.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section
      id="blog"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Writing 📝</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical insights from tech interviews to engineering principles and algorithm basics
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              size="sm"
              variant="outline"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, blogs.length)} of {blogs.length}
              </span>
            </div>
            
            <Button
              size="sm"
              variant="outline"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ 
                transform: `translateX(-${currentIndex * 50}%)` 
              }}
            >
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="flex-shrink-0 group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
                  style={{ width: `calc(50% - 12px)` }}
                >
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors text-lg">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {blog.pubDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {blog.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {blog.categories.slice(0, 4).map((category, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors">
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Article
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;