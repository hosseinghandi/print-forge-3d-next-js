import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import { Navbar } from "@/components";
import { Metadata } from "next";
import type { RootLayoutProps } from "@/types/page";
export const metadata: Metadata = {
  title: "PrintForge",
  description: "Your go-to platform for 3D printing files",
};
const albert_Sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const monst = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--text-monst",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albert_Sans.className} ${monst.variable} text-foreground px-global`}
      >
        <header>
          <Navbar />
        </header>
        <main
          className="min-h-screen flex justify-center items-center 
          pt-[calc(var(--spacing-nav)+5vh)]"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
