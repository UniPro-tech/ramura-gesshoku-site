import { LINKS } from "@/config";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center w-full px-8 py-10 bg-[#1b1b20] text-white">
      <div className="flex flex-row justify-between items-center w-full max-w-4xl">
        {/* Left */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-6xl">
            <ruby>
              月蝕<rt>Gesshoku</rt>
            </ruby>
          </h1>
          <sub className="text-2xl mb-4">Created by らむら</sub>
          <div className="flex flex-col">
            <span>&copy; 2025 UniProject</span>
            <span>℗ 2025 ramura</span>
            <span>&copy; 2025 Oct-sina</span>
          </div>
        </div>
        {/* Center */}
        <div className="flex flex-col justify-center items-center gap-4">
          <Link
            href="https://uniproject.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/gesshoku/images/banner/powered-by-unipro.png"
              alt="Powered by UniProject"
              width={250}
              height={0}
            />
          </Link>
          <Link
            href="https://ramura.uniproject.jp/arane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/gesshoku/images/banner/arane.png"
              alt="荒音の夜 - 現音令彼 配布サイト"
              width={250}
              height={0}
            />
          </Link>
        </div>
        {/* Right */}
        <div className="flex flex-col justify-start items-start gap-2 text-2xl">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
