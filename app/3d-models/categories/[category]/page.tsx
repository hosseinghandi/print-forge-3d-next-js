import type { ParamsProps } from "@/types/page";
import { getAllcategory, getCategoryBySlug } from "@/lib/categories";
import { ModelGrid, SideFilter } from "@/components";
export default async function CategoryPage({ params }: ParamsProps) {
  const { category } = await params;
  const models =
    category === ""
      ? await getAllcategory()
      : await getCategoryBySlug(category);
  return (
    <div>
      <SideFilter />
      <ModelGrid models={models} />
    </div>
  );
}
