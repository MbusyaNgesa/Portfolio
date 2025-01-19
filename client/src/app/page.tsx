import Image from "next/image";
import Link from "next/link";

import profile from "../img/pfp1.jpeg";
import { Button } from "@mui/material";
import { ArrowDownToLine, Github } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventnami",
    },
    {
      title: "Eventlify",
      description: [
        "A web-based events listing platform that incorporates vendors, a ticket system, and two admin dashboards.",
      ],
      techStack: ["NextJS", "TypeScript", "Express", "NodeJS"],
      link: "https://github.com/MbusyaNgesa/eventnami",
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4">
      <div className=" mt-4">
        {/*Header */}
        <div className="space-y-2">
          <h1
            className="text-4xl font-bold bg-gradient-to-r
           from-indigo-500 via-purple-500
            to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Ngesa Ian
          </h1>
          <h2 className="text-xl text-gray-400">
            Fullstack Developer | Backend
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0 mt-6 ">
        {/* Image Section */}
        <div className="relative aspect-square w-full max-w-[400px] ">
          <div
            className="absolute inset-0 rounded-3xl border-0
           border-white/20 "
          >
            <Image
              src={profile}
              width={350}
              height={350}
              alt="Profile"
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl mb-4">About Me</h3>
            <p className="text-gray-400">
              I&apos;m a fullstack developer specializing in modern web
              technologies. With expertise in both frontend and backend
              development, I create scalable and efficient solutions for complex
              problems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="bg-black border-2 border-white/20 
            hover:border-white/40  rounded-br-xl "
            >
              <Link
                href="https://github.com/MbusyaNgesa"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              className="bg-green-600 border-2 border-teal-600
             hover:border-white/40 rounded-bl-xl text-white "
            >
              Resume
              <ArrowDownToLine className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/*Projects */}

      <div className="flex justify-between items-center mb-6 px-4 mt-12">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link href="/projects">
          <button
            className="text-blue-500 font-medium
          bg-black hover:underline p-[9px]
           rounded-br-xl"
          >
            View All
          </button>
        </Link>
      </div>

      {/* Underline */}
      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-center ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
          {/*Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 max-w-md border rounded-lg shadow-lg
           :"
            >
              <h1 className="font-bold text-md">{project.title}</h1>
              <div className="border-b-2 border-gray-300 mb-6"></div>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-4">
                <ul className="flex space-x-3 text-sm text-gray-600">
                  <li>{project.techStack}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
