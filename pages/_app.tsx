import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import axios from "axios";
import { SWRConfig } from "swr";
import axiosClient from "@/api/axios-client";
import "../styles/globals.css";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
