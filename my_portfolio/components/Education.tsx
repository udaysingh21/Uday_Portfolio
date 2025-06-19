"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const timelineData = [
  {
    icon: <School className="text-purple-500 w-5 h-5" />,
    title: "M.Tech in Software Engineering",
    sub: "BITS Pilani • 2024 - 2026",
    desc: "Pursuing M.Tech with a focus on advanced algorithms and system design.",
    coursework: "Software Architecture, DevOps, Cloud Computing, Machine Learning",
    color: "border-purple-500",
    delay: "100",
  },
  {
    icon: <School className="text-blue-500 w-5 h-5" />,
    title: "B.Tech in Computer Science",
    sub: "Shri Ramswaroop Memorial College of Engineering and Management • 2020 - 2024",
    desc: "Studied Data Structures, Web Development, and Software Engineering.",
    coursework: "Data Structure and Algorithms, Computer Network, Cloud Computing, Machine Learning",
    color: "border-blue-500",
    delay: "200",
  },
  {
    icon: <School className="text-green-500 w-5 h-5" />,
    title: "Class 12 – CBSE",
    sub: "New Way Senior Secondary School • 2018 - 2020",
    desc: "Completed Higher Secondary Education with PCM and Computer Science.",
    coursework: "Physics, Chemistry, Maths",
    color: "border-green-500",
    delay: "300",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-20 px-6 md:px-16 bg-white text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-2">
          Academics 🎓
        </h2>

        <div className="relative pl-6">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300" />

          <div className="space-y-14">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                {/* Dot */}
                <span className="absolute left-[-15px] top-3 w-4 h-4 rounded-full bg-white border-4 border-blue-500 rounded-full z-10" />

                {/* Content */}
                <Card className="w-full shadow-sm ml-6">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {item.sub}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700"><strong>Coursework: </strong>{item.coursework}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
