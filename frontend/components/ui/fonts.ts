import { Gwendolyn } from "next/font/google";
import localFont from "next/font/local";

export const gwendolyn = Gwendolyn({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gwendolyn",
  display: "swap",
});

export const tantangkiwood = localFont({
  src: [
    {
      path: "../../public/fonts/TANTangkiwood-Display.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TANTangkiwood-Display.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tantangkiwood",
  display: "swap",
});

export const garetBook = localFont({
  src: [
    {
      path: "../../public/fonts/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Garet-Book.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-garet-book",
  display: "swap",
});