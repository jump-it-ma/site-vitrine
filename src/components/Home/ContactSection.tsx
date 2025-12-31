"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import ContactUsForm from "@/components/ContactUsForm";
import { footer } from "@/content/general";
import { PiMapPinLine } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";

export default function ContactSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Contact
          </div>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Contactez-<span className="text-purple-600">nous</span>
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous
            accompagner vers la réussite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: Address */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-3 text-purple-600 text-xl">
                  <PiMapPinLine />
                </div>
                <h3
                  className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-1`}
                >
                  Adresse
                </h3>
                <p className={`${latoFont.className} text-xs text-slate-600`}>
                  Rabat, Maroc
                </p>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-3 text-purple-600 text-xl">
                  <MdOutlinePhone />
                </div>
                <h3
                  className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-1`}
                >
                  Téléphone
                </h3>
                <a
                  href={`tel:${footer.phone}`}
                  className={`${latoFont.className} text-xs text-slate-600 hover:text-purple-600 transition-colors`}
                >
                  {footer.phone}
                </a>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-3 text-purple-600 text-xl">
                  <TbMailFilled />
                </div>
                <h3
                  className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-1`}
                >
                  Email
                </h3>
                <a
                  href={`mailto:${footer.email}`}
                  className={`${latoFont.className} text-xs text-slate-600 hover:text-purple-600 transition-colors break-all`}
                >
                  {footer.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full bg-white p-2 rounded-3xl shadow-sm border border-slate-200 flex-grow min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.721540496029!2d-6.830836124235474!3d34.0253579731671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c1e9c531b826db%3A0xc80a219673a7fec7!2sJump%20IT!5e0!3m2!1sen!2sma!4v1767180863627!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="h-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
