"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-16 bg-white text-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        <div className="space-y-6">
          {/* Experience 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Scholar Trainee – SAP Labs</CardTitle>
              <CardDescription>Jul 2023 – Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Working on full-stack enterprise applications using modern technologies.</li>
                <li>Collaborating with senior engineers in agile teams.</li>
                <li>Hands-on experience with scalable system design and cloud tools.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience 2 */}
          <Card>
            <CardHeader>
              <CardTitle>DSA Instructor – Digipoidum</CardTitle>
              <CardDescription>2022 – Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Taught 500+ students core data structures and algorithms.</li>
                <li>Created curated content and assignments with real-time feedback.</li>
                <li>Conducted live problem-solving sessions and mock interviews.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
