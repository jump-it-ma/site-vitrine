"use client";

import { latoFont, montserratFont } from "@/utils/fonts";
import { HiLightBulb, HiBolt, HiChartBar } from "react-icons/hi2";

const features = [
  {
    title: "Expertise Reconnue",
    description:
      "Une équipe d'experts certifiés avec plus de 10 ans d'expérience dans les technologies de pointe.",
    icon: HiLightBulb,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    title: "Approche Agile",
    description:
      "Des méthodologies flexibles et itératives pour s'adapter rapidement à vos besoins évolutifs.",
    icon: HiBolt,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Résultats Mesurables",
    description:
      "Un focus constant sur la qualité et le retour sur investissement pour votre entreprise.",
    icon: HiChartBar,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-6`}
            >
              Pourquoi choisir <span className="text-purple-600">JumpIT</span> ?
            </h2>
            <p
              className={`${latoFont.className} text-lg text-slate-600 mb-8 leading-relaxed`}
            >
              Nous combinons expertise technique et vision stratégique pour vous
              offrir des solutions qui font la différence. Notre engagement
              envers l&apos;excellence est au cœur de tout ce que nous faisons.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3
                      className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-2`}
                    >
                      {feature.title}
                    </h3>
                    <p className={`${latoFont.className} text-slate-600`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3 opacity-50 blur-lg"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
              {/* Abstract visual representation instead of generic stock photo */}
              <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm bg-white/5">
                    <span
                      className={`${montserratFont.className} text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20`}
                    >
                      JUMP IT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
