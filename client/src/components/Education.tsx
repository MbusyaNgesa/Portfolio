import { Code, GraduationCap, Shield } from "lucide-react";

const educationData = [
  {
    title: "Bachelor Degree in IT",
    institution: "KCAU University",
    year: "2021 - 2024",
    icon: GraduationCap,
  },
  {
    title: "Software Development Bootcamp",
    institution: "Gomycode",
    year: "2024",
    icon: Code,
  },
  {
    title: "Data Protection Certification",
    institution: "Strathmore University",
    year: "2024",
    icon: Shield,
  },
  {
    title: "Postman Certification",
    institution: "Postman",
    year: "2024",
    icon: Shield,
  },
];

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold mb-4 bg-gradient-to-r
           from-indigo-500 via-purple-500
            to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Mastery<span className="text-6xl">.</span>
            Schools Certifications
          </h1>
          <div className="border-b-2 border-gray-300 mb-6"></div>
        </div>
        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 
          h-full w-1 bg-gray-200 "
          ></div>
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`mb-6 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div
                className="z-20 flex items-center order-1
               bg-gray-800 shadow-xl w-8 h-8 rounded-full"
              >
                <h1
                  className="mx-auto font-semibold text-lg
                 text-white"
                >
                  {index + 1}
                </h1>
              </div>
              <div
                className={`order-1 bg-white rounded-lg 
              shadow-xl transition-transform transform 
              hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/15
         shadow-purple-900/20
               w-5/12 px-6 py-4`}
              >
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-snug tracking-wide
                 text-gray-900 text-opacity-100"
                >
                  {item.institution}
                </p>
                <p className="text-xs text-gray-500">{item.year}</p>
                <div className="mt-4">
                  <item.icon className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-2 border-gray-300 mb-6 mt-20 "></div>
    </section>
  );
}

// function getShadowColor(index: number): string {
//   const shadowColors = [
//     "shadow-teal-600/20",
//     "shadow-red-700/30",
//     "shadow-sky-950/40",
//     "shadow-orange-600/40",
//     "shadow-yellow-600/25",
//   ];
//   return shadowColors[index % shadowColors.length];
// }
