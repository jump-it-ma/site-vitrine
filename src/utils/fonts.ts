import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
  Inter,
  Jost,
  K2D,
  Lato,
  Montserrat,
  Poppins,
  Roboto,
} from "next/font/google";

// Variable fonts (no weight needed usually, but can be specified)
export const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

// Explicit weight for specific usage if needed (e.g. matching existing variable names)
export const montserratBoldFont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const jostFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

// Static fonts (must specify weights)
export const latoFont = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const robotoFont = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const ibmFont = IBM_Plex_Sans({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const ibmCondensedFont = IBM_Plex_Sans_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const poppinsFont = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const k2dFont = K2D({
    weight: ["400"],
    subsets: ["latin"],
    display: 'swap',
});

export const interFont = Inter({
    subsets: ["latin"],
    display: 'swap',
});
