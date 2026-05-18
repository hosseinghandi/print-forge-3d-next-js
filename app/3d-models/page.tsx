import { getAllModels } from "@/lib/models";
import { SideFilter, ModelGrid } from "@/components";

export default async function ModelsList() {
  const models = await getAllModels();
  return (
    <div className="w-full">
      <SideFilter />
      <ModelGrid title="3D models" models={models} />
    </div>
  );
}
