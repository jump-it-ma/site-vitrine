import localFont from "next/font/local";

// Variable fonts
export const montserratFont = localFont({
  src: "../../public/fonts/Montserrat-Variable.woff2",
  display: "swap",
});

export const jostFont = localFont({
  src: "../../public/fonts/Jost-Variable.woff2",
  display: "swap",
});

// Static fonts
export const latoFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lato-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const robotoFont = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const ibmFont = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const ibmCondensedFont = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexSansCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const poppinsFont = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const k2dFont = localFont({
  src: [
    {
      path: "../../public/fonts/K2D-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const interFont = localFont({
  src: "../../public/fonts/Inter-Variable.woff2",
  display: "swap",
});
