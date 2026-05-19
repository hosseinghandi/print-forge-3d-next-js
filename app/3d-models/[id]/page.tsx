import { getModelById } from "@/lib/models";
import type { ParamsProps } from "@/types/page";
import Image from "next/image";
import Pill from "@/components/shared/Pill";
import { iconList } from "@/constants/iconList";
import { ModelDetail } from "@/components";
export default async function ModelDetailPage({ params }: ParamsProps) {
  const { id } = await params;
  const model = await getModelById(id);
  return <ModelDetail {...model} />;
}
