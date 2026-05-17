import { getAllModels } from "@/lib/models";
import { SideFilter, ModelGrid } from "@/components";

export default async function ModelsList() {
  const models = await getAllModels();
  return (
    <div className="flex flex-col ">
      <SideFilter />
      <ModelGrid models={models} />
    </div>
  );
}
