import { FilterLinks } from "@/components";
export default function SideFilter() {
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
        <FilterLinks />
      </ul>
    </aside>
  );
}
