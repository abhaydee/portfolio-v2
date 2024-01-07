import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import GoogleAnalytics from "../Components/GoogleAnalytics";
import { useRouter } from "next/router";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}

export default MyApp;
