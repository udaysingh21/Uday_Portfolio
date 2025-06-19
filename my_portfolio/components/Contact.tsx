"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 text-black"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Whether you want to connect, collaborate, or just say hello — feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col items-center gap-4">
          <Button asChild variant="default" className="w-full sm:w-auto">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              your.email@example.com
            </a>
          </Button>

          <div className="flex gap-4 mt-4">
            <Button asChild variant="outline">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button asChild variant="outline">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
