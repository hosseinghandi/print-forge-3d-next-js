import models from "../data/models.json";

export async function getCategoryBySlug(slug: string) {
  const modelsBySlug = models.filter(({ category }) => category === slug);
  if (!models) throw new Error(`Categogry ${slug} is not exist pr not found`);
  return modelsBySlug;
}
