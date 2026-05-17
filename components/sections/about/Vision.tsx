import Image from "next/image";
import printer from "../../../public/printer.png";
export default function Vision() {
  return (
    <section
      aria-labelledby="vision-title"
      className="lg:w-3/5 mx-auto text-body-large flex flex-col gap-wide items-center"
    >
      <h2
        id="vision-title"
        className="text-titles-large font-bold w-full text-left"
      >
        Our vision
      </h2>
      <p>
        At PrintForge, we believe that 3D printing is revolutionizing the way we
        create, prototype, and manufacture. Our platform serves as a bridge
        between designers and makers, enabling the sharing of knowledge and
        creativity that pushes the boundaries of what's possible with 3D
        printing.
      </p>
      <div
        aria-hidden="true"
        className="w-10/12 lg:w-2/7 border-1 border-border-mate my-wide"
      ></div>
      <p>
        Whether you're a hobbyist looking for your next weekend project, an
        educator seeking teaching materials, or a professional designer wanting
        to share your creations, PrintForge provides the tools and community to
        support your journey in 3D printing.
      </p>
      <Image src={printer} alt="Printer nozzle icon" className="mt-wide" />
    </section>
  );
}
