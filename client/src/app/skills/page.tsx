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
  ];
  return (
    <div className="mt-5">
      <div className="ml-7">
        <h1 className="font-bold text-3xl">Skills</h1>
      </div>
      <div className="p-4 ml-3">
        <p className="text-xl text-gray-700">
          Here is the list of the skills I have acquired so far
        </p>
      </div>
      <div
        className="grid md:grid-cols-3 grid-cols-2 gap-2 
      mt-6 text-center m-10  "
      >
        {skills.map((skill, index) => (
          <Card key={index}>
            <div
              className="p-4 max-w-md border rounded-xl 
          shadow-lg "
            >
              <Image
                src={skill.image}
                width={80}
                height={80}
                alt="Image Unavailable"
                className=""
              />
              <h1>{skill.title}</h1>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
