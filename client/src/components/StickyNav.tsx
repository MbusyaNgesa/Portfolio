import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Education",
    href: "/education",
  },
  {
    name: "Skills",
    href: "/skills",
  },
];

export function StickyNav() {
  return (
    <nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 
    px-12 py-2 rounded-full backdrop-blur-md bg-blue/10 border
     border-white/20 shadow-lg"
    >
      <div className="flex items-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`p-2.5  hover:scale-110 
                transition-transform duration-200 flex 
                items-center justify-center hover:bg-blue-500 
                hover:rounded-xl hover:text-black `}
          >
            <span className=" text-white hover:text-black ">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
