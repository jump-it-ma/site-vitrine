"use client";

import Image from "next/image";
import { montserratFont, latoFont } from "@/utils/fonts";

const partners = [
  { name: "RAJA", src: "/trustBy/RAJA.png", width: 200, height: 150 },
  { name: "SITENCO", src: "/trustBy/SITENCO.png", width: 200, height: 150 },
  {
    name: "WERINGROUP",
    src: "/trustBy/WERINGROUP.png",
    width: 200,
    height: 150,
  },
  {
    name: "WILDCODESCHOOL",
    src: "/trustBy/WILDCODESCHOOL.png",
    width: 200,
    height: 150,
  },
  {
    name: "SOFRECOM",
    src: "/trustBy/SOFRECOM.png",
    width: 200,
    height: 150,
  },
];

export default function TrustSection() {
  // Duplicate partners to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-700 to-purple-600 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-block py-1 px-3 rounded-full bg-purple-600/50 border border-purple-400/30 text-purple-100 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm">
          Nos Références
        </div>
        <h2
          className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-white mb-4`}
        >
          Ils nous font confiance
        </h2>
        <p
          className={`${latoFont.className} text-purple-100 text-lg max-w-xl mx-auto font-light leading-relaxed`}
        >
          Nous accompagnons ces entreprises ambitieuses dans leur montée en
          compétences et leurs projets stratégiques.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Scrolling Track with Mask for Fade Effect */}
        <div
          className="flex w-max animate-scroll"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-[200px] h-32 flex items-center justify-center mx-8 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain max-h-12 w-auto brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
