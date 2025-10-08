"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Download({ files }: { files: { name: string; label: string }[] }) {
  return (
    <main className="bg-gradient-to-b z-0 from-[#000000] to-[#35333d] pb-20 min-h-screen flex flex-col justify-center items-center text-white">
      <section
        id="hero"
        className="min-h-screen relative flex flex-col justify-center items-center text-white w-full"
      >
        <Image
          src="/gesshoku/images/hero.png"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-30"
        />
        <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-7xl justify-center md:justify-between gap-10 md:gap-40 px-4">
          {/* spacer hidden on mobile, kept for desktop spacing */}
          <div className="hidden md:block w-[200px]"></div>
          <div className="flex flex-col justify-end items-center text-center md:text-left">
            <h1 className="text-[4.5rem] md:text-[7rem]">音源一覧</h1>
            <sub className="text-3xl md:text-6xl">Download</sub>
          </div>
          <div className="mt-6 md:mt-0">
            <Image
              src="/gesshoku/images/stand/3.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="w-60 h-auto"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 flex flex-col justify-center items-center gap-8 w-full max-w-6xl">
        <p className="text-2xl text-center max-w-3xl break-keep px-10">
          こちらから全ての
          <wbr />
          音源を
          <wbr />
          ダウンロードできます。
          <wbr />
          <Link
            href="https://ramura.uniproject.jp/license"
            className="text-blue-300 underline"
            target="_blank"
          >
            利用規約
          </Link>
          を<wbr />
          ご確認の上、
          <wbr />
          ご利用ください。
        </p>
        <div className="flex flex-col justify-center items-center w-full max-w-md py-20 space-y-5">
          {files.length === 0 && (
            <p className="text-2xl text-center">現在、配布中の音源はありません。</p>
          )}
          {files.map((file) => (
            <div
              key={file.name}
              className="flex flex-col md:flex-row md:justify-between items-center w-full gap-4"
            >
              <h2 className="text-3xl text-center md:text-left">{file.label}</h2>
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <DownloadButton filename={file.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function DownloadButton({ filename }: { filename: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const downloadUrl = `/download/dl-endpoint?file=${filename}`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-3xl bg-blue-950 px-10 py-2"
        aria-haspopup="dialog"
      >
        Download
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white text-black rounded-lg p-6 w-full max-w-md z-10">
            <h3 className="text-xl font-semibold mb-4">ダウンロードの確認</h3>
            <p className="mb-6 break-keep">
              この音源を使用するためには、
              <Link
                href="https://ramura.uniproject.jp/license"
                className="text-blue-600 underline"
                target="_blank"
              >
                利用規約
              </Link>
              への
              <wbr />
              同意が必要です。
              <wbr />
              同意しますか？
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setOpen(false)}
              >
                キャンセル
              </button>
              <button
                className="px-4 py-2 bg-blue-700 text-white rounded"
                onClick={() => {
                  setOpen(false);
                  router.push(downloadUrl);
                }}
              >
                同意する
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
