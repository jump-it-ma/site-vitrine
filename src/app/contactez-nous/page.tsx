"use client";

import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReturnToTop from "../../components/ReturnToTop";
import ContactUsForm from "@/components/ContactUsForm";
import { footer } from "@/content/general";
import { montserratFont, latoFont } from "@/utils/fonts";
import { PiMapPinLine } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
      </Script>

      <ReturnToTop />
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
              Contact
            </div>
            <h1
              className={`${montserratFont.className} text-4xl sm:text-5xl font-bold text-slate-900 mb-6`}
            >
              Contactez-<span className="text-purple-600">nous</span>
            </h1>
            <p
              className={`${latoFont.className} text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed`}
            >
              Une question ? Un projet ? Notre équipe est à votre écoute pour
              vous accompagner vers la réussite.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN: Info + Map */}
            <div className="flex flex-col gap-8">
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Card 1: Address */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600 text-2xl">
                    <PiMapPinLine />
                  </div>
                  <h3
                    className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-2`}
                  >
                    Adresse
                  </h3>
                  <p className={`${latoFont.className} text-sm text-slate-600`}>
                    Rabat, Maroc
                  </p>
                </div>

                {/* Card 2: Phone */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600 text-2xl">
                    <MdOutlinePhone />
                  </div>
                  <h3
                    className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-2`}
                  >
                    Téléphone
                  </h3>
                  <a
                    href={`tel:${footer.phone}`}
                    className={`${latoFont.className} text-sm text-slate-600 hover:text-purple-600 transition-colors`}
                  >
                    {footer.phone}
                  </a>
                </div>

                {/* Card 3: Email */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600 text-2xl">
                    <TbMailFilled />
                  </div>
                  <h3
                    className={`${montserratFont.className} font-bold text-slate-900 text-sm mb-2`}
                  >
                    Email
                  </h3>
                  <a
                    href={`mailto:${footer.email}`}
                    className={`${latoFont.className} text-sm text-slate-600 hover:text-purple-600 transition-colors break-all`}
                  >
                    {footer.email}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="w-full bg-white p-2 rounded-3xl shadow-sm border border-slate-200 flex-grow min-h-[450px]">
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
      </main>

      <Footer />
      <ToastContainer
        className="mt-16"
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        newestOnTop={true}
        theme="light"
      />
    </div>
  );
}
