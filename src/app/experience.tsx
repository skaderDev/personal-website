import Link from "next/link";
import Image from "next/image";
import SocialWheel from "./social-wheel";

export default function Experience() {
  const links = [
    {
      title: "See my resume",
      link: "/experience",
    },
    {
      title: "See my projects",
      link: "/projects",
    },
  ];

  return (
    <div className="introduction flex flex-col items-center justify-center text-center h-screen mt-[-8rem]">
      <div>
        <div className="text-xl font-semibold">Hi! My name is</div>
        <div className="header font-bold">Safwan Kader</div>
        <div className="text-xl font-semibold">Software Engineer</div>
      </div>
      <div className="header-options flex space-x-11 text-center mt-5">
        {links.map((link, index) => (
          <Link href={link.link} key={index}>
            <button className="header-button flex justify-space-between">
              {link.title}
            </button>
          </Link>
        ))}
      </div>
      <div className="social-wheel-bottom-right">
      </div>
    </div>
  );
}
