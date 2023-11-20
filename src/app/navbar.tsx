import Link from "next/link";

export default function Navbar() {
  const navbar_options = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Experience",
      link: "/experience",
    },
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <div className="header text-xl font-bold mt-6 mr-4 mb-6 pb-6 pl-6">
        Safwan's Website
      </div>
      <div className="navbar-buttons flex flex-row">
        {navbar_options.map((option, index) => (
          
            <Link href={option.link}><button key={index} className="button mt-4 mr-4 mb-6 pb-6">{option.title}</button></Link>
          
        ))}
      </div>
    </div>
  );
}
