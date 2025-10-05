import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <Image
          src="/images/hero.png"
          alt="Background Image"
          width={1920}
          height={1080}
          className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        />
        <div className="relative z-10 flex flex-row items-center w-full max-w-7xl justify-between">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[15rem] text-white text-center">
              <ruby>
                月蝕<rt className="text-7xl">Gesshoku</rt>
              </ruby>
            </h1>
            <span className="text-6xl">2025.10.06</span>
          </div>
          <Image
            src="/images/stand/3.png"
            alt="Hero Image"
            width={500}
            height={0}
          />
        </div>
      </section>
    </main>
  );
}
