import Image from "next/image";
import Link from "next/link";

import profile from "../img/pfp1.jpeg";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="p-2 ml-5 ">
      <div className="mt-4 pb-4 flex flex-col justify-center items-center ">
        <div className="text-left">
          <h1 className="text-4xl">Ngesa Ian</h1>
          <h2 className="text-3xl mt-2">
            FullStack Developer | Tech Enthusiast
          </h2>
        </div>
      </div>
      <div className="mt-4 lg:flex justify-center items-center ">
        <Image
          src={profile}
          height={300}
          width={300}
          alt="Profile Photo"
          className="rounded-xl w-64 h-64"
        />
        <div className="lg:ml-10 max-w-lg text-md ">
          <h1 className="mt-6 lg:mt-0 text-2xl font-semibold">About</h1>
          <p className="">
            My name is Ian Ngesa a fullstack developer versed in MERN Stack
            Languages I know are Javascript, Typescript, React, NodeJS I create
            various projects from simple CRUD apps to big enterprise projects
            according to ones needs Currently a freelance developer.
          </p>
          <div className="mt-4">
            <p>
              Reach out to me for more information about all the things I do
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
              molestiae?
            </p>
          </div>
        </div>
      </div>

      {/* Resume*/}
      <div className=" flex space-x-4 justify-center mt-6">
        <Link href="https://github.com/MbusyaNgesa">
          <Button className="bg-black text-teal-600">Github</Button>
        </Link>
        <Button className="bg-teal-600 text-black ">Resume</Button>
      </div>

      {/*Projects */}

      <div className="flex justify-between items-center mb-6 px-4 mt-12">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link href="/projects">
          <button className="text-blue-500 font-medium hover:underline">
            View All
          </button>
        </Link>
      </div>

      {/* Underline */}
      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-center ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
          {/*Card 1 */}
          <div
            className="p-6 max-w-md border rounded-lg shadow-lg
           :"
          >
            <h1 className="font-bold text-md">Eventlify</h1>
            <div className="border-b-2 border-gray-300 mb-6"></div>
            <p className="mt-2 text-gray-700">
              A web based events listing platform that incorporates vendors,
              ticket system and two admin dashboards
            </p>
            <div className="mt-4">
              <ul className="flex space-x-3 text-sm text-gray-600">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>

          {/*Card 2 */}
          <div className="p-6 max-w-md border rounded-lg shadow-lg">
            <h1 className="font-bold text-md">Eventlify</h1>
            <div className="border-b-2 border-gray-300 mb-6"></div>
            <p className="mt-2 text-gray-700">
              A web based events listing platform that incorporates vendors,
              ticket system and two admin dashboards
            </p>
            <div className="mt-4">
              <ul className="flex space-x-3 text-sm text-gray-600">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
