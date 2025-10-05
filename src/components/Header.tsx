import Link from "next/link";

export function Header() {
  const LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#download", label: "Download" },
    { href: "/license", label: "License" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="w-full mt-8 text-white flex justify-center items-center text-4xl fixed top-0 bg-opacity-50 backdrop-blur z-50">
      <nav>
        <ul className="flex space-x-20">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
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
