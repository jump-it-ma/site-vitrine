"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Une formation exceptionnelle qui a transformé notre approche du développement. Les formateurs sont de véritables experts terrain qui partagent bien plus que de la théorie.",
    author: "Karim B.",
    role: "Lead Tech",
    company: "Start-up Fintech",
    initial: "K",
  },
  {
    id: 2,
    content:
      "L'audit de nos processus QA a été un déclic. Grâce à l'accompagnement de Jump iT, nous avons réduit nos bugs de production de 40% en seulement 3 mois.",
    author: "Sofia M.",
    role: "Directrice Projet",
    company: "Grand Compte Assurances",
    initial: "S",
  },
  {
    id: 3,
    content:
      "J'ai particulièrement apprécié la pédagogie et les cas pratiques concrets. Une montée en compétence rapide et efficace sur les technologies Cloud.",
    author: "Youssef A.",
    role: "Développeur Senior",
    company: "ESN Internationale",
    initial: "Y",
  },
  {
    id: 4,
    content:
      "Une expertise pointue et une grande écoute. L'équipe a su s'adapter à nos contraintes spécifiques avec un professionnalisme exemplaire.",
    author: "Mehdi L.",
    role: "CTO",
    company: "Plateforme E-commerce",
    initial: "M",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Témoignages
          </div>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Ce qu&apos;ils disent de nous
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Découvrez les retours d&apos;expérience de ceux qui nous font
            confiance pour leur montée en compétence.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Window */}
          <div className="overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl shadow-purple-100/50">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full p-8 md:p-12 flex flex-col items-center text-center"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p
                    className={`${latoFont.className} text-slate-700 italic text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl`}
                  >
                    &ldquo;{item.content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-2xl mb-4 ring-4 ring-white shadow-sm">
                      {item.initial}
                    </div>
                    <p
                      className={`${montserratFont.className} font-bold text-slate-900 text-lg`}
                    >
                      {item.author}
                    </p>
                    <p
                      className={`${latoFont.className} text-sm text-slate-500`}
                    >
                      {item.role} <span className="mx-1">•</span> {item.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-all hover:scale-110 active:scale-95"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full ${
                  current === idx
                    ? "w-8 h-2.5 bg-purple-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-purple-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
