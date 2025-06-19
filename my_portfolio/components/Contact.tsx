"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-br bg-white to-white text-black"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          Say Hello 📬
        </h2>
        <p className="text-gray-600 mb-10 text-base sm:text-lg">
          Whether you're interested in collaborating, hiring, or just saying hello — I'm always open to a good conversation.
        </p>

        {/* Email Button */}
        <div className="mb-6">
          <Button
            asChild
            variant="default"
            size="lg"
            className="w-full sm:w-auto text-base px-6 py-4"
          >
            <a href="mailto:udayvikramsingh5@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              udayvikramsingh5@gmail.com
            </a>
          </Button>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-6 py-4"
          >
            <a
              href="https://www.linkedin.com/in/uday-vikram-singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-6 py-4"
          >
            <a
              href="https://github.com/udaysingh21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
