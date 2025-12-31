"use client";

import { montserratFont } from "@/utils/fonts";
import { googleMapsEmbed } from "@/utils/constants";
import ContactUsForm from "@/components/ContactUsForm";

export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Contactez-<span className="text-purple-600">nous</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 h-full min-h-[500px]">
            <iframe
              className="w-full h-full rounded-2xl"
              style={{ minHeight: "500px" }}
              loading="lazy"
              allowFullScreen={true}
              src={googleMapsEmbed}
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3
              className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-6`}
            >
              Envoyez-nous un message
            </h3>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
