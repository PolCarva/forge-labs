"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.2/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="max-h-[calc(100svh-104px)]">
      <spline-viewer url="https://prod.spline.design/MvAIzM0G4x17REUv/scene.splinecode"></spline-viewer>
    </main>
  );
}
