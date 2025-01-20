import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";

export const QuickLinks = () => {
  return (
    <>
      <div>
        <div
          className="flex justify-center items-center mb-6 
      px-4 mt-12 space-x-5 "
        >
          <Link href="mailto:mbusyangesa28@gmail.com" target="_blank">
            <Mail className="h-6 w-6 text-white" />
          </Link>

          <Link href="https://github.com/MbusyaNgesa" target="_blank">
            <Github className="h-6 w-6 text-white" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ian-ngesa-824202302/"
            target="_blank"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </Link>

          <Link href="https://x.com/ian_mbusya" target="_blank">
            <Twitter className="h-6 w-6 text-blue-500" />
          </Link>

          <Link
            href="https://wa.me/254794843866?text=Hello%20there!%20I%20would%20like%20to%20connect."
            target="_blank"
          >
            <MessageCircle className="h-6 w-6 text-green-500" />
          </Link>
        </div>
        <div className="border-b-2 border-gray-300 mb-6 mt-4"></div>
        <div className="flex"></div>
      </div>
    </>
  );
};
