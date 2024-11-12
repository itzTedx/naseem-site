import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { Logo } from "../assets/logo";
import { LogoType } from "../assets/logo-type";

export const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-6">
      <Link
        href={"/"}
        className="flex items-center gap-3 transition-transform active:scale-95"
      >
        <Logo className="h-9 w-auto" />
        <LogoType className="h-6 w-full" />
      </Link>

      <nav>
        <ul className="flex gap-3">
          {NAV_LINKS.map((link, i) => (
            <li key={i} className="transition-transform active:scale-95">
              <Link
                href={link.href}
                className={cn(
                  "px-5 py-3 font-semibold text-primary-foreground transition-colors duration-300 hover:text-primary",
                  link.href === "/contact" &&
                    "rounded-md bg-orange-500 text-background hover:bg-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
