import type { CardProps } from "@/types/component";
import { iconList } from "@/constants/iconList";
import Pill from "../shared/Pill";
import Image from "next/image";
export default function Card({ details }: CardProps) {
  const { name, description, likes, category } = details;
  return (
    <article
      aria-labelledby="card-title"
      className="
      flex flex-col
      border-1 rounded-radius border-border-mate h-full"
    >
      <div className="relative aspect-square">
        <Image
          src="/about.png"
          alt={description}
          width={1250}
          height={1250}
          className="object-cover rounded-t-radius"
        />
      </div>
      <div className="p-small flex flex-col gap-small h-full justify-between">
        <header>
          <h2 className="text-titles-card font-extrabold" id="card-title">
            {name}
          </h2>
        </header>
        <div role="contentinfo" className="flex-col flex gap-tight">
          <p>{description}</p>
          <Pill category={category} />
          <div className="flex flex-row items-center gap-tight">
            <iconList.Heart
              aria-hidden="true"
              className="text-foreground-mate"
            />
            <p className="text-foreground-mate w-full">{likes}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
