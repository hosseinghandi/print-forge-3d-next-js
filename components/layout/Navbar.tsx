import { navLinks } from "../../constants/navLinks";
import Logo from "../shared/Logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav
      aria-label="Main nav"
      className="
          fixed top-0 left-0 flex flex-row w-full items-center justify-between
          bg-white px-[calc(var(--spacing-global)-1vw)] py-4 h-nav z-50"
    >
      <Logo />
      <ul
        aria-label="Navlinks"
        className="flex flex-row gap-medium font-semibold text-foreground-mate"
      >
        {navLinks.map(({ link, label, aria }) => (
          <li
            key={label}
            className="flex flex-col items-center 
                hover:text-hover"
          >
            <Link href={link} aria-label={aria} replace>
              {label}
            </Link>
            {false && <div aria-hidden="true" className="outline w-full"></div>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
