import Link from "next/link";

import { NAV_LINKS } from "@/constants";

import { Logo } from "../assets/logo";
import { LogoType } from "../assets/logo-type";

export const Footer = () => {
  return (
    <footer className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="flex items-center justify-center gap-3">
            <Logo className="h-9 w-auto" />
            <LogoType className="h-7 w-auto" />
          </Link>
          <ul className="mb-10 flex flex-col items-center justify-center gap-7 border-b border-gray-200 py-16 text-lg transition-all duration-500 md:flex-row md:gap-12">
            {NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="block text-center text-lg text-gray-500">
            © {new Date().getFullYear()}, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
