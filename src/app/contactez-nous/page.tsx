"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUsForm from "../../components/ContactUsForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReturnToTop from "../../components/ReturnToTop";
import { calendlyEmbed } from "../../utils/constants";
import Script from "next/script";

import { montserratFont } from "@/utils/fonts";

type Props = {};

export default function ContactUs({}: Props) {
  const [isIframeLoading, setIsIframeLoading] = useState(false);
  useEffect(() => {
    setIsIframeLoading(true);
  }, []);
  return (
    <div className="bg-ac-gray flex flex-col justify-start items-center w-full">
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

      {/* Calendly */}
      {/* <div className="flex justify-center items-center w-full xm:w-3/4 h-full">
                {isIframeLoading
                    ? <iframe
                        className={"w-full h-full min-h-[1250px] calendly:min-h-[750px] border-0 box-border"}
                        src={calendlyEmbed}
                        title='Select a Date & Time - Calendly'
                    ></iframe>
                    : <div className={" w-full h-full min-h-[1250px] calendly:min-h-[750px] bg-ac-gray2 brightness-75 mt-4 rounded-lg animate-pulse"}></div>
                }
            </div> */}

      {/* Contact Us */}
      <div className="flex flex-col justify-center items-center gap-4 w-full pt-8 bg-ac-gray -translate-y-6 rounded-t-3xl ">
        <h2
          className={
            montserratFont.className +
            " font-bold text-4xl text-black text-left"
          }
        >
          Contactez-<span className="text-ac-violet">nous</span>
        </h2>
        <Image
          src="/Homepage/hand-drawn-arrow.png"
          width={96}
          height={96}
          alt="Arrow"
        />
        <ContactUsForm />
      </div>

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
