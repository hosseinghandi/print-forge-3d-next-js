"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "../../constants/navLinks";
import Logo from "../shared/Logo";
import Link from "next/link";
import { getActiveLink } from "@/lib/utils/getActiveLink";
export default function Navbar() {
  const param = usePathname();
  // simplify it
  const activeLinkClass =
    "text-hover border-b-2 transition-all duration-100 ease-in-out hover:text-hover ";
  return (
    <nav
      aria-label="Main nav"
      className="fixed top-0 left-0 flex flex-row w-full items-center 
      justify-between bg-white px-global py-4 h-nav z-50"
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
            <Link
              href={link}
              aria-label={aria}
              replace
              className={`${getActiveLink(link, param) ? activeLinkClass : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
