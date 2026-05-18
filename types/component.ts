import type { ModelsListStructure } from "./data";

export type CardProps = {
  details: ModelsListStructure;
};

export type ModelGridProps = {
  models: ModelsListStructure[];
  title: string;
};
