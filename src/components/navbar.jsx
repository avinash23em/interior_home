import Logo from "../assets/Logo(1).png";
const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Project",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
export default function Navbar() {
  return (
    <div className="container py-4 flex justify-between items-center">
      <div className="flex items-center gap-3 p-4">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold">INTERIOR</span>
      </div>
      <div className="hidden md:block !space-x-12 ">
        {NavLinks.map((link) => {
          return (
            <a
              href={link.link}
              className="inline-block mx-4 text-lg font-semibold"
            >
              {link.title}
            </a>
          );
        })}
      </div>
      <div>
     <button className="primary_btn">Try for free</button>
      </div>
    </div>
  );
}
