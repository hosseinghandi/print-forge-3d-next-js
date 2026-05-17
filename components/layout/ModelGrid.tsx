import { ModelGridProps } from "@/types/component";
import Link from "next/link";
import Card from "../shared/Card";
import SideFilter from "../shared/SideFilter";
export default function ModelGrid({ models }: ModelGridProps) {
  return (
    <div
      role="region"
      aria-label="3d models list"
      className="
        w-full gap-large min-w-4/5 md:w-4/5 ml-auto  border-1
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 "
    >
      {models.map((model) => (
        <Link href={`3d-models/${model.id}`} key={model.id}>
          <Card details={model} />
        </Link>
      ))}
    </div>
  );
}
