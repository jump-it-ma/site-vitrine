import { footer } from "@/content/general";
import { latoFont, robotoFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer" className="w-full relative mt-16">
      {/* Decorative Curve SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[80px] lg:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 L1200,120 L1200,60 Q600,-40 0,60 Z" fill="#b400ff" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#b400ff] w-full pt-4 pb-12">
        {/* DESKTOP CONTENT */}
        <div className="hidden md:flex justify-between items-stretch px-6 xm:px-24 lg:px-36 xl:px-48 gap-4 w-full">
          <div className="flex flex-col justify-between items-start">
            <Link
              href="/"
              className="w-full flex justify-start items-center mb-6"
            >
              <Image
                className="w-32 h-auto object-contain object-center brightness-200"
                src="/logo.png"
                height={200}
                width={200}
                alt="Jump iT"
              />
            </Link>

            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm text-purple-100">{footer.copyright1}</p>
              <p className="text-sm text-purple-100">{footer.copyright2}</p>
            </div>
          </div>

          <div className="flex justify-end items-start gap-16">
            <div className="flex flex-col justify-start items-stretch gap-6">
              <p
                className={`${latoFont.className} text-sm font-bold text-white uppercase tracking-wider`}
              >
                Jump iT
              </p>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link href={"/formations"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors`}
                  >
                    Formation
                  </p>
                </Link>
                <Link href={"/conseil"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors`}
                  >
                    Conseil
                  </p>
                </Link>
                <Link href={"/blogs"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors`}
                  >
                    Blog
                  </p>
                </Link>
                <Link href={"/contactez-nous"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors`}
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-start items-stretch gap-8">
              <div className="flex flex-col justify-start items-stretch gap-4">
                <div className="flex justify-start items-center gap-3">
                  <PiMapPinLine size={20} className="text-white shrink-0" />
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 whitespace-normal max-w-[180px]`}
                  >
                    {footer.address}
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <MdOutlinePhone size={20} className="text-white shrink-0" />
                  <a
                    href={"tel:" + footer.phone}
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors whitespace-normal max-w-[180px]`}
                  >
                    {footer.phone}
                  </a>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <TbMailFilled size={20} className="text-white shrink-0" />
                  <a
                    href={"mailto:" + footer.email}
                    className={`${robotoFont.className} text-sm text-purple-50 hover:text-white transition-colors whitespace-normal max-w-[180px]`}
                  >
                    {footer.email}
                  </a>
                </div>
              </div>

              <div className="relative flex justify-start items-center gap-4">
                <a
                  target="_blank"
                  rel="noopener"
                  href={footer.socialLinks.linkedin}
                  className="flex justify-center items-center group"
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white transition-all duration-300">
                    <AiFillLinkedin
                      size={20}
                      className="text-white group-hover:text-[#b400ff] transition-colors"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href={footer.socialLinks.youtube}
                  className="flex justify-center items-center group"
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white transition-all duration-300">
                    <AiFillYoutube
                      size={20}
                      className="text-white group-hover:text-[#b400ff] transition-colors"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CONTENT */}
        <div className="md:hidden flex flex-col justify-between items-stretch px-6 xm:px-24 gap-4 w-full">
          <div className="w-full flex justify-center items-center">
            <Image
              className="w-32 h-auto object-contain object-center brightness-200"
              src="/logo.png"
              height={200}
              width={200}
              alt="Jump iT-mobile"
            />
          </div>
          <div className="flex flex-col justify-end items-center gap-12 mt-6">
            <div className="flex flex-col justify-start items-center gap-4 text-center">
              <p
                className={`${latoFont.className} text-sm font-bold text-white uppercase tracking-wider`}
              >
                Jump iT
              </p>
              <div className="flex flex-col justify-start items-center gap-3">
                <Link href={"/formations"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 active:text-white`}
                  >
                    Formation
                  </p>
                </Link>
                <Link href={"/conseil"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 active:text-white`}
                  >
                    Conseil
                  </p>
                </Link>
                <Link href={"/blogs"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 active:text-white`}
                  >
                    Blog
                  </p>
                </Link>
                <Link href={"/contactez-nous"}>
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 active:text-white`}
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col justify-start items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                  <PiMapPinLine size={20} className="text-white" />
                  <p
                    className={`${robotoFont.className} text-sm text-purple-50 text-center max-w-[200px]`}
                  >
                    {footer.address}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <MdOutlinePhone size={20} className="text-white" />
                  <a
                    href={"tel:" + footer.phone}
                    className={`${robotoFont.className} text-sm text-purple-50 text-center`}
                  >
                    {footer.phone}
                  </a>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <TbMailFilled size={20} className="text-white" />
                  <a
                    href={"mailto:" + footer.email}
                    className={`${robotoFont.className} text-sm text-purple-50 text-center`}
                  >
                    {footer.email}
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6">
                <a
                  target="_blank"
                  rel="noopener"
                  href={footer.socialLinks.linkedin}
                  className="flex justify-center items-center"
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 active:bg-white">
                    <AiFillLinkedin
                      size={20}
                      className="text-white active:text-[#b400ff]"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href={footer.socialLinks.youtube}
                  className="flex justify-center items-center"
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 active:bg-white">
                    <AiFillYoutube
                      size={20}
                      className="text-white active:text-[#b400ff]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-8 mb-2 gap-1">
            <p className="text-xs text-purple-200">{footer.copyright1}</p>
            <p className="text-xs text-purple-200">{footer.copyright2}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
