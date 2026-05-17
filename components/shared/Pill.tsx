type PillProps = { category: string };
export default function Pill({ category }: PillProps) {
  return (
    <div className="border-1 border-border-mate rounded-radius w-fit px-2 ">
      <span>{category}</span>
    </div>
  );
}
