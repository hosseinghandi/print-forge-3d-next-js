import { filtersList } from "@/constants/filterList";
import Link from "next/link";
export default function SideFilter() {
  return (
    <aside aria-label="Filter list" className="md:fixed">
      <ul
        className="w-full max-md:max-w-[calc(100vw-(var(--spacing-global)*2))] 
        flex overflow-x-auto flex-row max-md:py-wide 
        md:flex-col gap-wide "
      >
        {filtersList.map(({ label, slug }) => (
          <li key={slug}>
            <Link
              href={slug ? `/3d-models/categories/${slug}` : "/3d-models"}
              replace
              className="lg:text-body-medium whitespace-nowrap"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
