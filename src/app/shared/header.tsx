import Link from "next/link";
import Image from 'next/image'

export default function Header() {
  const navbar_options = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center">
      {/* Use ReactSVG to render the SVG image */}
      <Image
              src="/logo.svg"
              alt="Safwan Logo"
              width={60}
              height={24}
              style={{ margin: "1rem" }}
              priority
            />
      <div className="navbar-buttons flex flex-row">
        {navbar_options.map((option, index) => (
          <Link href={option.link} key={index}>
            <button className="navbar-button mt-4 mr-4 mb-6 pb-6">{option.title}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
