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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Naseem al muwalih" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
