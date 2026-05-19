import { getAllModels } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import { SideFilter, ModelGrid } from "@/components";
import type { ParamsProps } from "@/types/page";
export default async function CategorizedPage({ params }: ParamsProps) {
  const { category } = await params;
  const models = !category
    ? await getAllModels()
    : await getCategoryBySlug(category);
  return (
    <div className="w-full">
      <SideFilter />
      <ModelGrid title={category} models={models} category={category} />
    </div>
  );
}
