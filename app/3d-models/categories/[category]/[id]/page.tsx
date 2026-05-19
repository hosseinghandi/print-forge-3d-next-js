import { ModelDetail } from "@/components";
import { getModelById } from "@/lib/models";
import type { ParamsProps } from "@/types/page";
export default async function ModelDetailPageInCategory({
  params,
}: ParamsProps) {
  const { id } = await params;
  const model = await getModelById(id);
  return <ModelDetail {...model} />;
}
