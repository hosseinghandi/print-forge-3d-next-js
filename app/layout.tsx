import "./globals.css";
import { Albert_Sans } from "next/font/google";
import { Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Your go-to platform for 3D printing files",
};
const albert_Sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albert_Sans.className} text-foreground px-global`}>
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
