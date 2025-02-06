import Image from "next/image";
import js from "../images/js.png";
import ts from "../images/ts.png";
import react from "../images/react.jpg";
import next from "../images/nextjs.jpg";
import node from "../images/nodejs.png";
import express from "../images/expressjs.png";
import mysql from "../images/mySql.png";
import mongodb from "../images/mongodb.png";
import firebase from "../images/firebase.png";
import css from "../images/css.png";
import tailwind from "../images/tailwind.jpg";
import bootstrap from "../images/bootstrap.jpg";

export default function Skills() {
  const skills = [
    {
      image: js,
      title: "Javascript",
    },
    {
      image: ts,
      title: "Typescript",
    },
    {
      image: react,
      title: "ReactJS",
    },
    {
      image: next,
      title: "NextJS",
    },
    {
      image: node,
      title: "NodeJS",
    },
    {
      image: express,
      title: "Express",
    },
    {
      image: mysql,
      title: "MySQL",
    },
    {
      image: mongodb,
      title: "MongoDB",
    },
    {
      image: firebase,
      title: "FireBase",
    },
    {
      image: css,
      title: "CSS",
    },
    {
      image: tailwind,
      title: "Tailwind",
    },
    {
      image: bootstrap,
      title: "Bootstrap",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r
           from-indigo-500 via-purple-500
            to-pink-500 inline-block text-transparent bg-clip-text"
        >
          SKILLS
        </h1>
        <div className="border-b-2 border-gray-300 mb-6"></div>
      </div>
      <div className="">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-5 gap-3 
      mt-6 text-center md:ml-[85px] md:mr-[85px] ml-4 mr-4 mb-14 "
        >
          {skills.map((skill, index) => (
            // <Card  >
            <div
              key={index}
              className="flex bg-slate-100 p-4 max-w-md border-2 rounded-xl 
          shadow-xl hover:border-green-600 
           hover:ring-orange-300 transition-all cursor-pointer"
            >
              <Image
                src={skill.image}
                width={80}
                height={80}
                alt="Image Unavailable"
                className="rounded-xl"
              />
              <h1 className="p-6">{skill.title}</h1>
            </div>
            // </Card>
          ))}
        </div>
      </div>
      <div className="border-b-2 border-gray-300 mb-6"></div>
    </div>
  );
}
