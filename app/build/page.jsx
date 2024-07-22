"use client"

export default function Home() {
  return (
    <main className="max-h-[calc(100svh-104px)]">
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.2/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/MvAIzM0G4x17REUv/scene.splinecode"></spline-viewer>
    </main>
  );
}
