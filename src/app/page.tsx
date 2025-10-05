import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#040305] to-[#35333d]">
      <section
        id="hero"
        className="min-h-screen relative flex flex-col justify-center items-center"
      >
        <Image
          src="/images/hero.png"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
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
      <section
        id="poem"
        className="flex flex-col justify-center items-center text-center gap-8 py-60"
      >
        <p>
          今夜、月は静かに笑う。
          <br />
          その影に立つは、名も無き旅人――月蝕。
        </p>
        <p>
          時間をもてあそび、
          <br />
          星を語り、
          <br />
          歴史を抱き、
          <br />
          未来を視る者。
        </p>
        <p>
          声は紳士、微笑は不気味。
          <br />
          昼は氷を纏い、夜は凍てつく。
          <br />
          ただ、その瞳は宇宙よりも温かい。
        </p>
        <p>
          重力を遊び、隕石を落とし、
          <br />
          過ぎた景色を呼び戻す。
          <br />
          それでも彼は言う――
          <br />
          「戦うのは、苦手でね」と。
        </p>
        <p>
          シルクハットの影に潜むのは、
          <br />
          46億年を彷徨った知識と、
          <br />
          人の心を見つめる好奇。
        </p>
        <p>
          新月には、避けられぬ未来を告げ、
          <br />
          満月には、約束された運命を届ける。
        </p>
        <p>
          今宵、彼はただ囁く。
          <br />
          「貴方様は非常に……面白い方、ですね」
        </p>
        <p>
          そして夜は深く、
          <br />
          月は静かに――世界を見下ろす。
        </p>
      </section>
    </main>
  );
}
