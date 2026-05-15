import { Navbar, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="min-h-screen flex justify-center items-center 
        pt-[calc(var(--spacing-nav)+5vh)]"
      >
        <Hero />
      </main>
    </>
  );
}
