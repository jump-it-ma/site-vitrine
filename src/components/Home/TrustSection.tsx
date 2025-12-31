"use client";

import Image from "next/image";
import { montserratFont } from "@/utils/fonts";

const partners = [
  { name: "RAJA", src: "/trustBy/RAJA.png", width: 200, height: 150 },
  { name: "SITENCO", src: "/trustBy/SITENCO.png", width: 200, height: 150 },
  { name: "ATA", src: "/trustBy/ATA.png", width: 150, height: 150 },
  { name: "3ISCHOOL", src: "/trustBy/3ISCHOOL.png", width: 200, height: 150 },
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
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`${montserratFont.className} text-3xl font-bold text-slate-900 mb-4`}
          >
            Ils nous font confiance
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full h-32 flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-100 hover:shadow-lg transition-all duration-300 group grayscale hover:grayscale-0"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain max-h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
