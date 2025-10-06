"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type SlideshowProps = {
  images: { src: string; alt?: string; width?: number; height?: number }[];
  interval?: number;
};

export default function Slideshow({ images, interval = 3000 }: SlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const img = images[index];

  return (
    <div className="relative w-full max-w-[400px] h-auto flex items-center justify-center flex-col">
      <button
        onClick={prev}
        className="absolute left-0 z-20 bg-black/40 text-white p-2 rounded-full m-2"
        aria-label="previous"
      >
        ‹
      </button>

      <div className="w-full h-full flex items-center justify-center overflow-hidden rounded">
        <Image
          src={img.src}
          alt={img.alt || "slide"}
          width={img.width || 400}
          height={img.height || 400}
          className="object-contain max-w-full h-auto"
        />
      </div>

      <button
        onClick={next}
        className="absolute right-0 z-20 bg-black/40 text-white p-2 rounded-full m-2"
        aria-label="next"
      >
        ›
      </button>
      {/* pagination dots */}
      <div className="mt-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
