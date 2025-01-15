// import { Card } from "@/types";
// import { Button } from "@mui/material";
// import Image from "next/image";

// interface CardProps {
//   card: Card;
// }

// export const ProjectCard = ({ card }: CardProps) => {
//   return (
//     <>
//       <div
//         className="p-6 max-w-md border rounded-lg
//         shadow-lg transform transition-transform duration-300
//         hover:scale-105 max-h-min"
//       >
//         {/* Image Section */}
//         <div className="h-1/4 mb-4">
//           <Image
//             src={card.image}
//             width={300}
//             height={150}
//             alt="Project Image"
//             className="rounded-t-lg object-cover w-full h-full"
//           />
//         </div>

//         {/* Card Content */}
//         <h1 className="font-bold text-md">{card.title}</h1>
//         <div className="border-b-2 border-gray-300 my-4"></div>
//         <p className="text-gray-700">{card.description}</p>
//         <div className="mt-4">
//           <ul className="flex space-x-3 text-sm text-gray-600">
//             {card.techStack.map((tech, index) => (
//               <li key={index}>{tech}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-4 flex space-x-2">
//           <Button variant="contained">Github</Button>
//           <Button variant="contained">Live</Button>
//         </div>
//       </div>
//     </>
//   );
// };
