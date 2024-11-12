import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Building Dreams, Crafting Reality - Naseem al Muwalih",
  description:
    "Whether you're planning a new construction project, need skilled manpower, or are looking for expert project management, We're here to bring your vision to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          manrope.variable,
          "scroll-smooth antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
