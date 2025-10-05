import type { Metadata } from "next";
import { BIZ_UDMincho } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const bizUdMincho = BIZ_UDMincho({
  weight: ["400", "700"],
  variable: "--font-biz-ud-mincho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "月蝕(Gesshoku) - UTAU音源配布サイト",
  description:
    "月夜に舞い降りる、正体不明の存在 ─ UTAU音源「月蝕(Gesshoku)」の公式配布サイトへようこそ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${bizUdMincho.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
