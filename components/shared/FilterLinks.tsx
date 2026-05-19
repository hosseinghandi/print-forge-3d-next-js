"use client";
import { filtersList } from "@/constants/filterList";
import { getActiveLink } from "@/lib/utils/getActiveLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FilterLinks() {
  const activeLinkClass = `max-md:text-hover max-md:border-b-2 
  md:text-hover md:border-l-2 md:pl-small`;
  const path = usePathname();
  return (
    <>
      <li>
        <Link
          href="/3d-models"
          replace
          className={`lg:text-body-medium whitespace-nowrap 
                    ${path.endsWith("3d-models") ? activeLinkClass : ""}`}
        >
          All
        </Link>
      </li>
      {filtersList.map(({ label, slug }) => (
        <li key={slug}>
          <Link
            href={slug ? `/3d-models/categories/${slug}` : "/3d-models"}
            replace
            className={`lg:text-body-medium whitespace-nowrap 
                    ${getActiveLink(slug, path) ? activeLinkClass : ""}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}
