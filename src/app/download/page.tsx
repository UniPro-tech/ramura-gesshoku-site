import { Metadata } from "next";
import Download from "./client";
import { resolve } from "node:path";
import { promises as fs } from "fs";

export const metadata: Metadata = {
  title: "ダウンロード - 月蝕(Gesshoku)",
  description:
    "UTAU音源「月蝕(Gesshoku)」のダウンロードページです。ご利用には利用規約への同意が必要です。",
  keywords: ["月蝕", "Gesshoku", "音楽", "UTAU", "音源", "ダウンロード"],
};

export default async function DownloadWrap() {
  const dirPath = resolve(process.cwd(), "./data/settings/files.json");
  const file = await fs.readFile(dirPath, { encoding: "utf-8" });
  const filesData = JSON.parse(file).data as { name: string; label: string }[];
  return <Download files={filesData} />;
}
