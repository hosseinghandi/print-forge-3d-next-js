import { ModelGridProps } from "@/types/component";
import Link from "next/link";
import Card from "../shared/Card";
export default function ModelGrid({ models, title }: ModelGridProps) {
  return (
    <section className="w-full md:w-[80%] md:ml-[20%]">
      <h1 className="text-titles-section font-extrabold mb-small">{title}</h1>
      <div
        role="region"
        aria-label="3d models list"
        className="
        gap-large grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      >
        {models.map((model) => (
          <Link href={`3d-models/${model.id}`} key={model.id}>
            <Card details={model} />
          </Link>
        ))}
      </div>
    </section>
  );
}
