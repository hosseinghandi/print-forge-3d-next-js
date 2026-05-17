import { featuresList } from "@/constants/featuresList";
export default function Features() {
  return (
    <ul
      aria-label="Features"
      className="flex py-wide border-y-1 
      flex-col gap-wide items-start 
      lg:flex-row flex-1 lg:justify-between 
      [&>*:first-child]:border-none"
    >
      {featuresList.map(({ Icon, title, desc }) => (
        <li
          key={title}
          className="w-full xl:w-11/12 flex flex-col items-center 
          xl:border-l-1 max-lg:border-t-1 py-medium justify-center 
          xl:px-large border-border-mate"
        >
          <div
            className="w-full flex flex-row items-center 
           gap-small mb-medium"
          >
            <Icon aria-hidden="true" className="size-icons" />
            <h3 className="text-body-large font-extrabold">{title}</h3>
          </div>
          <p className="w-full">{desc}</p>
        </li>
      ))}
    </ul>
  );
}
