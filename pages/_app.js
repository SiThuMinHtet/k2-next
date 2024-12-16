import "@/styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/globals.scss";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}