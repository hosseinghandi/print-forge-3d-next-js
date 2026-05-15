import logo from "../../public/logo.png";
import Image from "next/image";
import { navLinks } from "../../lib/constant/navLinks";
export default function Navbar() {
  return (
    <nav
      aria-label="Main nav"
      className="
          fixed top-0 left-0 flex flex-row w-full items-center justify-between
          bg-white px-[calc(var(--spacing-global)-1vw)] py-4 h-nav"
    >
      <Image src={logo} aria-hidden="true" alt="" className="h-[5vh] w-fit" />
      <div className="flex flex-row gap-medium font-semibold text-foreground-mate">
        {navLinks.map(({ link, label }) => (
          <div
            key={label}
            className="flex flex-col items-center 
                hover:text-hover "
          >
            <a
              className=""
              href={link}
              aria-label="Navigate to Visit 3d models"
            >
              {label}
            </a>
            {false && <div className="outline w-full"></div>}
          </div>
        ))}
      </div>
    </nav>
  );
}
