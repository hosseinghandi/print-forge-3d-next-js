import logoLarge from "../../public/logoLarge.png";
import logoSmall from "../../public/logoSmall.png";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link aria-label="navigate to Homepage" href="/">
        <Image
          src={logoLarge}
          aria-hidden="true"
          alt=""
          className="hidden h-[5vh] w-fit sm:block"
        />
        <Image
          src={logoSmall}
          aria-hidden="true"
          alt=""
          className="h-[5vh] w-fit sm:hidden"
        />
      </Link>
    </>
  );
}
