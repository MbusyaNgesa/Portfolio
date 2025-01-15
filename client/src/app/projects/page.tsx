import { Button, Card, CardContent, CardHeader } from "@mui/material";
import project2 from "../images/pfp2.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventnami",
    },
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventnami",
    },
    {
      image: project2,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventnami",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">PROJECTS</h1>
          <div className="border-b-2 border-gray-300 mb-6"></div>
          <p className="text-gray-600 text-lg">
            A few of the projects that I have worked on over the years that I
            can publicly talk about.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 
        max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 
              overflow-hidden hover:scale-105 hover:cursor-pointer "
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
                <div>
                  <Button>
                    <Link href={project.link}>Github</Link>
                  </Button>
                  <Button>Live</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { Card } from "@/types";
// import { ProjectCard } from "@/components/ProjectCard";
// import project from "../images/pfp2.jpeg";
// import project2 from "../images/icon2.jpg";

// export default function Projects() {
//   const projectData: Card[] = [
//     {
//       image: project,
//       title: "Eventlify",
//       description: [
//         "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
//       ],
//       techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
//     },
//     {
//       image: project2,
//       title: "Eventlify",
//       description: [
//         "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
//       ],
//       techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
//     },
//     {
//       image: project,
//       title: "Eventlify",
//       description: [
//         "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
//       ],
//       techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
//     },
//   ];

//   return (
//     <>
//       <div>
//         <div className="text-center my-6">
//           <h1 className="text-2xl font-bold">Projects</h1>
//           <div className="border-b-2 border-gray-300 w-20 mx-auto my-2"></div>
//         </div>
//         <div className="flex justify-center">
//           <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-6">
//             {projectData.map((project, index) => (
//               <ProjectCard key={index} card={project} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
