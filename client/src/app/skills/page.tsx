import Image from "next/image";
import js from "../images/pfp2.jpeg";
import { Card } from "@mui/material";

export default function Skills() {
  const skills = [
    {
      image: js,
      title: "Javascript",
    },
    {
      image: js,
      title: "Javascript",
    },
    {
      image: js,
      title: "Javascript",
    },
    {
      image: js,
      title: "Javascript",
    },
    {
      image: js,
      title: "Javascript",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SKILLS</h1>
        <div className="border-b-2 border-gray-300 mb-6"></div>
      </div>
      <div className="">
        <div
          className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 
      mt-6 text-center md:ml-[85px] md:mr-[85px] ml-4 mr-4"
        >
          {skills.map((skill, index) => (
            <Card key={index}>
              <div
                className="flex p-4 max-w-md border rounded-xl 
          shadow-lg "
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
