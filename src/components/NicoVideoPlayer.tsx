"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  width: number;
  height: number;
};

export default function NicovideoPlayer(props: Props) {
  const { id, width, height } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const divElm = divRef.current;
    if (divElm === null) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://embed.nicovideo.jp/watch/${id}/script?w=${width}&h=${height}`;

    script.onload = () => setLoading(false);
    script.onerror = () => setLoading(false);

    divElm.appendChild(script);

    return () => {
      while (divElm.firstChild) {
        divElm.removeChild(divElm.firstChild);
      }
    };
  }, [height, id, width]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div
        ref={divRef}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
}
