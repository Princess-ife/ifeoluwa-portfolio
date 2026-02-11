"use client";

import { useEffect, useState } from "react";
import PreLoader from "./pre-loader";

export default function ClientLayout({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {loader && <PreLoader />}
      {children}
    </>
  );
}
