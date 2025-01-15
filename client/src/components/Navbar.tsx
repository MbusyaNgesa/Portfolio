import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" bg-black text-white rounded-b-lg">
      <div className=" p-4 flex justify-center items-center  ">
        <div className="ml-4 ">
          <ul className="flex space-x-6  ">
            <Link href="/">
              <li className="hover:underline hover:decoration-teal-400 ">
                Home
              </li>
            </Link>{" "}
            <Link href="/about">
              <li className="hover:underline hover:decoration-teal-400 ">
                About
              </li>
            </Link>
            <Link href="/projects">
              <li className="hover:underline hover:decoration-teal-400 ">
                Projects
              </li>
            </Link>
            <Link href="/skills">
              <li className="hover:underline hover:decoration-teal-400 ">
                Skills
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
