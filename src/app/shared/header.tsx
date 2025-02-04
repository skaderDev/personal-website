import Link from "next/link";
import Image from 'next/image'

export default function Header() {
//   const navbar_options = [
//     {
//       title: "About",
//       link: "/about",
//     },
//     {
//       title: "Contact",
//       link: "/contact",
//     },
//   ];

  return (
    <div className="flex items-center mt-3">
      {/* Use ReactSVG to render the SVG image */}
      <Image
              src="/logo.svg"
              alt="Safwan Logo"
              width={60}
              height={24}
              style={{ margin: "1rem" }}
              priority
            />
            <div className="text-4xl">Projects</div>
    </div>
  );
}
