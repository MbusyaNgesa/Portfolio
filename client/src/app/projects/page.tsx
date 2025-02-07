import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import eventlify from "../images/eventlify.png";
import cashwrap from "../images/cashwrap.jpg";
import rental from "../images/rental1.webp";

export default function Projects() {
  const projects = [
    {
      image: eventlify,
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventlify",
      live: "https://eventlifyke.vercel.app/",
    },
    {
      image: cashwrap,
      title: "CashWrap",
      description: [
        "A budget tracking web app that helps users manage their finances by tracking income and expenses in real time.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/CashWrap",
      live: "https://github.com/MbusyaNgesa/CashWrap",
    },
    {
      image: rental,
      title: "Motorhub",
      description: [
        "A car rental app that simplifies the process of renting and offers a wide selection of cars to choose from.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/Motorhub",
      live: "https://github.com/MbusyaNgesa/Motorhub",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className="text-[44px] font-bold mb-4 bg-gradient-to-r 
           from-lime-400 via-green-400
            to-emerald-500 inline-block text-transparent bg-clip-text"
          >
            Projects
          </h1>
          <div className="border-b-2 border-gray-300 mb-6"></div>
          <p className="text-gray-600 text-lg">
            A few of the projects that I have worked on over the years that I
            can publicly talk about.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 
         max-w-4xl mx-auto mb-14"
        >
          {projects.map((project, index) => (
            <Card
              sx={{ backgroundColor: "black" }}
              key={index}
              className="bg-slate-700/40 border
              overflow-hidden hover:scale-105 hover:cursor-pointer 
              transition duration-700 mb-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "No Project Image"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <h2 className="text-xl text-white font-bold mb-2">
                  {project.title}
                </h2>
                <div className="border-b-2 border-gray-400 mb-2"></div>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="px-3 py-1 bg-cyan-800/40 text-gray-300 text-sm rounded"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                {/* <div className="text-gray-400">{project.year}</div> */}
                <div className="flex space-x-2">
                  <Button className="bg-black">
                    <Link href={project.link} target="_blank">
                      Github
                    </Link>
                  </Button>
                  <Button className="bg-cyan-800 text-white ">
                    <Link href={project.live} target="_blank">
                      Live
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="border-b-2 border-gray-300 mb-6"></div>
      </div>
    </div>
  );
}
