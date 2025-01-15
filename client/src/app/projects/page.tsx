import { Card, CardContent, CardHeader } from "@mui/material";
import project2 from "../images/pfp2.jpeg";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
    },
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
    },
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">PROJECTS</h1>
          <p className="text-gray-400 text-lg">
            A few of the projects that I have worked on over the years that I
            can publicly talk about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "No Project Image"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h2 className="text-xl font-bold">{project.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                {/* <div className="text-gray-400">{project.year}</div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
