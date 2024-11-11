import Link from "next/link";

import { NAV_LINKS } from "@/constants";

import { Logo } from "../assets/logo";
import { LogoType } from "../assets/logo-type";

export const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-6">
      <div className="flex items-start">
        <Logo className="h-9" />
        <LogoType className="h-9 w-full" />
      </div>
      <nav>
        <ul className="flex gap-9">
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
