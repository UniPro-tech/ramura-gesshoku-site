import { LINKS } from "@/config";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full mt-8 text-white flex justify-center items-center text-4xl absolute top-0 z-50">
      <nav>
        <ul className="flex space-x-20">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.target || "_self"}
                className="hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
