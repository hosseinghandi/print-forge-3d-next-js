"use client";
import { filtersList } from "@/constants/filterList";
import Link from "next/link";
import { getActiveLink } from "@/lib/utils/getActiveLink";
import { useParams } from "next/navigation";

export default function SideFilter() {
  const { category } = useParams();
  const activeLinkClass =
    "max-md:text-hover max-md:border-b-2 md:text-hover md:border-l-2 md:pl-small";
  return (
    <aside aria-label="Filter list" className="md:fixed relative">
      <ul
        className="w-full max-md:max-w-[calc(100vw-(var(--spacing-global)*2))] 
        flex overflow-x-auto flex-row max-md:py-wide 
        md:flex-col gap-wide "
      >
        <div
          className="absolute top-0 right-0 w-8 h-full pointer-events-none 
        bg-gradient-to-l from-white to-transparent md:hidden"
        />
        {filtersList.map(({ label, slug }) => (
          <li key={slug}>
            <Link
              href={slug ? `/3d-models/categories/${slug}` : "/3d-models"}
              replace
              className={`lg:text-body-medium whitespace-nowrap 
                ${getActiveLink(slug, category) ? activeLinkClass : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
