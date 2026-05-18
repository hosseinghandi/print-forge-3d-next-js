import type { ParamsProps } from "@/types/page";
import { getAllcategory, getCategoryBySlug } from "@/lib/categories";
import { ModelGrid, SideFilter } from "@/components";
export default async function CategoryPage({ params }: ParamsProps) {
  const { category } = await params;
  const models =
    category === "all"
      ? await getAllcategory()
      : await getCategoryBySlug(category);
  return (
    <div className="w-full">
      <SideFilter />
      <ModelGrid title={category.toUpperCase()} models={models} />
    </div>
  );
}
