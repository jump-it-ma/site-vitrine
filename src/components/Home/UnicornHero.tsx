"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import { HiArrowRight } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";

export default function UnicornHero() {
  return (
    <section className="relative w-full bg-slate-50 pt-32 pb-20 overflow-hidden">
      {/* Dashed Center Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10 max-w-7xl max-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Nouveau : Catalogue de Formation 2025
          </span>

          <h1
            className={`${montserratFont.className} mt-3 text-4xl sm:text-5xl lg:text-7xl leading-tight font-bold text-slate-900 tracking-tight`}
          >
            Formation d&apos;excellence.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Conseil stratégique.
            </span>
          </h1>

          <p
            className={`${latoFont.className} mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed`}
          >
            Accompagnement sur-mesure pour votre transformation numérique.
            Montez en compétence avec nos experts et assurez la qualité de vos
            produits logiciels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center">
            <a
              href="/formations"
              className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 bg-purple-600 text-white font-semibold tracking-wide transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 ring-1 ring-purple-500 active:scale-95"
            >
              <span>Voir les formations</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/conseil"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-white/50 border border-slate-200 text-slate-700 font-medium hover:bg-white/80 transition-all backdrop-blur-md active:scale-95"
            >
              <HiGlobeAlt className="w-5 h-5 text-slate-500" />
              <span>Nos services conseil</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
