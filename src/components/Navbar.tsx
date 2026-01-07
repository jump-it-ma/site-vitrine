"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineArrowRight, HiX } from "react-icons/hi";
import { montserratFont, latoFont } from "@/utils/fonts";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Formation", href: "/formations" },
    { name: "Conseil", href: "/conseil" },
    { name: "Blog", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
        <nav
          className={`
            w-full max-w-5xl rounded-full transition-all duration-300 ease-in-out
            flex items-center justify-between px-6 py-3
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-xl shadow-purple-500/10 border-4 border-purple-100"
                : "bg-white backdrop-blur-xl border-4 border-purple-100"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-24 overflow-hidden">
              <Image
                src="/icone.png"
                alt="JumpIT"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${montserratFont.className}
                    ${
                      isActive(link.href)
                        ? "text-purple-600 bg-purple-50"
                        : "text-slate-900 hover:text-purple-600 hover:bg-slate-50"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contactez-nous" className="hidden sm:block">
              <div className="group relative flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 shadow-md hover:shadow-purple-500/25">
                <span
                  className={`text-xs font-bold uppercase tracking-wide ${montserratFont.className}`}
                >
                  Contact
                </span>
                <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setShowMenu(true)}
              className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          showMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
          onClick={() => setShowMenu(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-4 right-4 w-[calc(100%-2rem)] max-w-sm bg-white rounded-3xl shadow-2xl p-6 transition-transform duration-300 ${
            showMenu ? "translate-y-0 scale-100" : "-translate-y-10 scale-95"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span
              className={`text-lg font-bold text-slate-900 ${montserratFont.className}`}
            >
              Menu
            </span>
            <button
              onClick={() => setShowMenu(false)}
              className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setShowMenu(false)}
              >
                <div
                  className={`
                    px-5 py-4 rounded-2xl flex items-center justify-between transition-all
                    ${
                      isActive(link.href)
                        ? "bg-purple-50 text-purple-700 font-bold"
                        : "bg-slate-50 text-slate-600 font-medium hover:bg-slate-100"
                    }
                  `}
                >
                  <span className={latoFont.className}>{link.name}</span>
                  {isActive(link.href) && (
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                  )}
                </div>
              </Link>
            ))}

            <div className="h-px bg-slate-100 my-4" />

            <Link href="/contactez-nous" onClick={() => setShowMenu(false)}>
              <div className="w-full bg-purple-600 text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-wider shadow-lg shadow-purple-600/20 active:scale-95 transition-transform">
                <span>Contactez-nous</span>
                <HiOutlineArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
