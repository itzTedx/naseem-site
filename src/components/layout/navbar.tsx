import Link from "next/link";

import { IconLocation, IconMenu2, IconPhone } from "@tabler/icons-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { Logo } from "../assets/logo";
import { LogoType } from "../assets/logo-type";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-6">
      <Link
        href={"/"}
        className="flex items-center gap-3 transition-transform active:scale-95"
      >
        <Logo className="h-5 w-auto flex-shrink-0 md:h-10" />
        <LogoType className="h-5 w-auto flex-shrink-0 md:h-9" />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex gap-3">
          {NAV_LINKS.map((link, i) => (
            <li key={i} className="transition-transform active:scale-95">
              <Link
                href={link.href}
                className={cn(
                  "px-5 py-3 font-semibold text-primary-foreground transition-colors duration-300 hover:text-primary",
                  link.label === "Contact" &&
                    "rounded-md bg-orange-500 text-background hover:bg-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="outline" size="icon">
            <IconMenu2 />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="border-b pb-4">
              <Link
                href={"/"}
                className="flex items-center gap-3 transition-transform active:scale-95"
              >
                <Logo className="h-5 w-auto flex-shrink-0" />
                <LogoType className="h-6 w-auto flex-shrink-0" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex h-full flex-col justify-between py-9">
            <ul className="flex flex-col gap-9">
              {NAV_LINKS.map((link, i) => (
                <li key={i} className="transition-transform active:scale-95">
                  <Link
                    href={link.href}
                    className={cn(
                      "py-4 font-semibold text-primary-foreground transition-colors duration-300 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-3">
              <li className="w-full">
                <Link href="/">
                  <Button className="w-full" size="lg">
                    <IconPhone />
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/">
                  <Button className="w-full" size="lg">
                    <IconLocation />
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
