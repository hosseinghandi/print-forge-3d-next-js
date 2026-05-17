import Image from "next/image";
import imgAbout from "../../../public/about.png";
export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full flex flex-row gap-large xl:justify-around max-md:flex-col "
    >
      <div className="w-full xl:max-w-[500px] xl:size-4/11 lg:size-5/11 max-md:order-2">
        <Image
          placeholder="blur"
          src={imgAbout}
          alt="A set of 3d printing producation"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="flex flex-col w-full lg:size-6/11 gap-wide">
        <p className="text-titles-label">About printforge</p>
        <h1
          id="about-title"
          className="text-titles-large font-bold leading-13 "
        >
          Empowering makers worldwide
        </h1>
        <div className="flex flex-col gap-wide text-body-medium xl:text-body-large">
          <p>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </div>
    </section>
  );
}
