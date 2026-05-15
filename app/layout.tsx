import "./globals.css";
import { Albert_Sans } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
