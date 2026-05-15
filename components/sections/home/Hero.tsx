import Image from "next/image";
import homeCover from "../../../public/homeCover.png";
export default function Hero() {
  return (
    <section
      className="h-full flex flex-row justify-between items-center
        max-lg:flex-col max-lg:gap-section lg:gap-wide"
      aria-label="Hero section"
    >
      <div className="flex flex-col min-w-1/2 max-lg:order-2 text-titles-label max-w-[700px]">
        <p className="uppercase ">Your go-to platform for 3D printing files</p>
        <h1 className="font-extrabold my-wide text-titles-large ">
          Discover what’s possible with 3D printing
        </h1>
        <h2 className="text-xl text-body-large">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </h2>
        <button
          type="button"
          aria-label="Explore 3d models"
          className="border-2 w-fit px-small py-tight mt-wide"
        >
          Browse models
        </button>
      </div>

      <div className="w-1/2 max-w-[600px] min-w-[450px] md:min-w-[350px] max-md:min-w-[300px] max-lg:order-1">
        <Image
          loading="lazy"
          src={homeCover}
          alt="An image includes 3d printer works"
        />
      </div>
    </section>
  );
}
