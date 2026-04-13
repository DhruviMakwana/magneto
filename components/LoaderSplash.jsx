"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoaderSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="page-loader page-loader--overlay" aria-busy="true" aria-live="polite">
      <div className="page-loader__panel">
        <div className="page-loader__logo-wrap">
          <Image
            src="/download.gif"
            alt="Magneto Mall"
            width={220}
            height={220}
            unoptimized
            priority
            className="page-loader__logo"
          />
        </div>
      </div>
    </div>
  );
}
