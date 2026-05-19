import type { ModelsListStructure } from "@/types/data";
export const handelCardRoutes = {
  routeById: (id: ModelsListStructure["id"]): string => `/3d-models/${id}`,
  routebyCategory: (
    id: ModelsListStructure["id"],
    category: ModelsListStructure["category"],
  ): string => `/3d-models/categories/${category}/${id}`,
};
