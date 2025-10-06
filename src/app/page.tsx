import { Metadata } from "next";
import Image from "next/image";
import Slideshow from "../components/Slideshow";

export const metadata: Metadata = {
  title: "月蝕(Gesshoku) - UTAU音源配布サイト",
  description:
    "今夜、月は静かに笑う。その影に立つは、名も無き旅人――月蝕。月夜に舞い降りる、正体不明の存在 ─ UTAU音源「月蝕(Gesshoku)」の公式配布サイトへようこそ。",
  keywords: ["月蝕", "Gesshoku", "音楽", "UTAU", "音源", "ダウンロード"],
};

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#040305] to-[#35333d] pb-20">
      <section
        id="hero"
        className="min-h-screen relative flex flex-col justify-center items-center text-white"
      >
        <Image
          src="/gesshoku/images/hero.png"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        />
        <div className="relative z-10 flex flex-row items-center w-full max-w-7xl justify-between">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[15rem] text-center">
              <ruby>
                月蝕<rt className="text-7xl">Gesshoku</rt>
              </ruby>
            </h1>
            <span className="text-6xl">2025.10.06</span>
          </div>
          <Image
            src="/gesshoku/images/stand/3.png"
            alt="Hero Image"
            width={500}
            height={0}
          />
        </div>
      </section>
      <section
        id="poem"
        className="flex flex-col justify-center items-center text-center gap-8 py-60 text-white"
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
      <section
        id="about"
        className="flex flex-col justify-center items-center gap-8 mb-20 text-white"
      >
        <h2 className="text-center text-6xl">
          <ruby>
            月蝕<rt>Gesshoku</rt>
          </ruby>
        </h2>
        <div className="flex flex-row justify-center items-center gap-16 w-full max-w-7xl">
          <div className="flex flex-col justify-start items-center mb-30">
            <div
              id="lead"
              className="text-3xl mb-4 flex flex-col justify-center items-center"
            >
              <span className="w-full break-keep">──「今夜は月が綺麗ですね。</span>
              <span className="w-full break-keep">
                {"　　"}ワタシの事は『
                <ruby>
                  月蝕<rt>Gesshoku</rt>
                </ruby>
                』とお呼びください」──
              </span>
            </div>
            <p className="text-xl">
              身長：194cm（シルクハット込み254cm）
              <br />
              体温：昼 11&#8451; / 夜 -15&#8451;
              <br />
              能力：未解 / 重引 / 天落 / 回帰
              <br />
              特徴：正体不明の存在。 <br />
              星と歴史を愛し、冷たい体温と共に不可避の予言を告げる。
              <br />
              口調：紳士的だが少し不気味
              <br />
              好き：星、芸術、歴史、酒、観察
              <br />
              戦闘力：高いが「戦うのは苦手」と本人談
              <br />
            </p>
          </div>
          <div>
            <Slideshow
              images={[
                { src: "/gesshoku/images/stand/0.png", alt: "stand 1", width: 400 },
                { src: "/gesshoku/images/stand/3.png", alt: "stand 3", width: 400 },
                { src: "/gesshoku/images/stand/5.png", alt: "stand 5", width: 400 },
                { src: "/gesshoku/images/stand/10.png", alt: "stand 10", width: 400 },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
