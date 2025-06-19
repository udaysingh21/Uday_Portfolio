"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Associate Developer – SAP Labs, India",
    sub: "August 2024 – Present, Full-time",
    desc: [
      "Developed a PoC for the Joule use case, validating multi-product input and dynamically returning key details such as plant name and storage location for the Oil and Gas sector.",
      "Developed and delivered stable mobile code for the first release of FL and EWM personas in SSAM.",
      "Fixed 40+ critical bugs, reducing crash rates and improving load times on iOS and Android.",
      "Winner of Innvent for Scholars Hackathon",
    ],
    color: "border-green-500",
    delay: "100",
  },
  {
    title: "DSA Instructor – Digipodium",
    sub: "2022 – 2024",
    desc: [
      "Conducted on-site sessions focused on core DSA concepts using Python.",
      "Helped students build strong problem-solving foundations through clear, structured instruction.",
      "Received consistently positive feedback for clarity and teaching effectiveness.",
    ],
    color: "border-yellow-500",
    delay: "300",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-20 px-6 md:px-16 bg-white text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-2">
         Career 💼
        </h2>

        <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              {/* Dot on timeline */}
              <span className="absolute -left-[33px] top-3 w-4 h-4 bg-white border-4 border-black rounded-full z-10" />

              {/* Experience Card */}
              <Card className={`shadow-md ${item.color}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.sub}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
