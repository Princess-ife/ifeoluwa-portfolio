"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "@/utils";
import Header from "./Header";
import PreLoader from "./pre-loader";

export default function ClientLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const pathname = usePathname();

  const pageClassName =
    pathname === "/" ? "home" : pathname.replace("/", "") + "-page";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    activeAnimation();
    initCursor();

    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);

    return () => {
      window.removeEventListener("scroll", activeAnimation);
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  useEffect(() => {
    const initAnimations = async () => {
      const Splitting = (await import("splitting")).default;
      Splitting();
      await jarallaxAnimation();
    };

    initAnimations();

    document.body.className = pageClassName;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {loader && <PreLoader />}

      <div className="container-page">
        <Header />
        <div className="wrapper">{children}</div>
      </div>

      {/* <div className="cursor" /> */}
    </>
  );
}
