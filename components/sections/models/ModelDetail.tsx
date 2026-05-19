import Image from "next/image";
import { iconList } from "@/constants/iconList";
import type { ModelsListStructure } from "@/types/data";
import { Pill } from "@/components";
import Link from "next/link";
export default function ModelDetail({
  likes,
  name,
  category,
  description,
  dateAdded,
}: ModelsListStructure) {
  return (
    <section
      aria-labelledby="3d-model-name"
      className="
      flex flex-col gap-large mb-small
      lg:flex-col md:w-8/11 lg:w-4/5 md:ml-auto lg:mt-auto lg:pb-medium  md:gap-wide md:items-end"
    >
      <Link href={"./"}>Back to 3D models</Link>
      <div>
        <div className="w-full aspect-square sm:order-1 lg:order-0">
          <Image
            src="/about.png"
            width={1250}
            height={1250}
            alt={""}
            className="rounded-radius"
          />
        </div>
        <div className="flex flex-col gap-medium w-full">
          <div className="flex flex-row gap-tight ">
            <iconList.Heart aria-hidden="true" className="text-body-large" />
            <p className="text-body-medium">{likes}</p>
          </div>

          <h1 id="3d-model-name" className="text-titles-section font-extrabold">
            {name}
          </h1>
          <Pill category={category} />
          <h2 className="text-body-medium">{description}</h2>
          <p className="mt-wide">Added on {dateAdded.split("T")[0]}</p>
        </div>
      </div>
    </section>
  );
}
