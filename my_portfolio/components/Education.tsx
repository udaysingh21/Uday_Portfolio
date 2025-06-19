"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 text-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

        <div className="space-y-6">
          {/* Entry 1 */}
          <Card>
            <CardHeader>
              <CardTitle>B.Tech in Computer Science</CardTitle>
              <CardDescription>XYZ University | 2019 - 2023</CardDescription>
            </CardHeader>
            <CardContent>
              Relevant Coursework: Data Structures, Algorithms, DBMS, OS, Web Development
            </CardContent>
          </Card>

          {/* Entry 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Scholar Trainee at SAP Labs</CardTitle>
              <CardDescription>Jul 2023 – Present</CardDescription>
            </CardHeader>
            <CardContent>
              Gaining real-world experience in full-stack development and enterprise software systems.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
