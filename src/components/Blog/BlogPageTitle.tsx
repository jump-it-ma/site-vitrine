"use client";

import { montserratFont } from "@/utils/fonts";
import { useEffect, useRef, useState } from "react";

type Props = {};

export default function BlogPageTitle({}: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  // Fait un listening si la taille de l'écran est changée
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const divHeight = divRef.current?.clientHeight;
    if (divHeight) {
      const marginTopValue = `${-divHeight / 2}px`;
      divRef.current.style.marginTop = marginTopValue;
    }
  }, [screenHeight]);
  return (
    <div
      ref={divRef}
      className="bg-ac-gray flex justify-center items-center relative rounded-t-xl px-4 fold:px-12 sm:px-20 py-2 fold:py-3 sm:py-5"
    >
      <div className="absolute -right-5 bottom-1/2 h-5 w-5 rounded-bl-xl bg-[#00000050] z-20"></div>
      <div className="absolute -right-5 bottom-1/2 h-5 w-5 bg-ac-gray z-10 border-0"></div>
      <div className="absolute -left-5 bottom-1/2 h-5 w-5 rounded-br-xl bg-[#00000050] z-20"></div>
      <div className="absolute -left-5 bottom-1/2 h-5 w-5 bg-ac-gray z-10 border-0"></div>
      <h2
        className={
          montserratFont.className +
          " font-semibold text-xl sm:text-2xl xm:text-3xl lg:text-4xl text-black text-center"
        }
      >
        Derniers Articles
      </h2>
    </div>
  );
}
