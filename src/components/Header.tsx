"use client";
import { LINKS } from "@/config";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full mt-8 text-white flex justify-center items-center text-4xl absolute top-0 z-50 bg-black/40 backdrop-blur-sm md:!backdrop-blur-none md:!bg-black/0">
      <nav className="w-full flex items-center justify-center md:justify-center relative px-4 py-3">
        {/* Hamburger for mobile */}
        <button
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden absolute right-6 top-3 p-2"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
            >
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          )}
        </button>

        <ul
          id="primary-navigation"
          className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row md:space-x-20 items-center md:items-center space-y-4 md:space-y-0`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.target || "_self"}
                className="hover:underline"
                onClick={() => setOpen(false)}
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
