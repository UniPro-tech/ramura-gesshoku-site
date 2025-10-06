import { Metadata } from "next";
import Download from "./client";

export const metadata: Metadata = {
  title: "ダウンロード - 月蝕(Gesshoku)",
  description:
    "UTAU音源「月蝕(Gesshoku)」のダウンロードページです。ご利用には利用規約への同意が必要です。",
  keywords: ["月蝕", "Gesshoku", "音楽", "UTAU", "音源", "ダウンロード"],
};

export default function DownloadWrap() {
  return <Download />;
}
