import models from "../data/models.json";
import type { ModelsListStructure } from "@/types/data";

export async function getAllModels(): Promise<ModelsListStructure[]> {
  return models;
}

export async function getModelById(
  id: number | string,
): Promise<ModelsListStructure> {
  const foundModel = models.find(
    (model: ModelsListStructure) => model.id.toString() === id.toString(),
  );
  if (!foundModel) throw new Error(`The model by id ${id} does not exist.`);
  return foundModel;
}
