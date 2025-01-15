import Image from "next/image";
import js from "../images/pfp2.jpeg";

export default function Skills() {
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
        {/*Card 1 */}
        <div
          className="p-4 max-w-md border rounded-lg 
          shadow-lg "
        >
          <Image
            src={js}
            width={80}
            height={80}
            alt="Image Unavailable"
            className=""
          />
          <h1>Javascript</h1>
        </div>

        {/*Card 2 */}
        <div className="p-4 max-w-md border rounded-lg shadow-lg">
          <h1>Javascript</h1>
        </div>

        {/*Card 3 */}
        <div className="p-4 max-w-md border rounded-lg shadow-lg">
          <h1>Javascript</h1>
        </div>

        {/*Card 4 */}
        <div className="p-4 max-w-md border rounded-lg shadow-lg">
          <h1>Javascript</h1>
        </div>
      </div>
    </div>
  );
}
