import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { SplineErrorBoundary } from "../spline/SplineErrorBoundary";

/* ================= HELPERS ================= */

function canUseWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/* ================= COMPONENT ================= */

export default function SafeSpline() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Enable Spline on ALL devices that support WebGL
  useEffect(() => {
    if (!canUseWebGL()) return;

    const timer = setTimeout(() => setEnabled(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Stop spline when hero is out of view (performance)
  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setEnabled(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled]);

  // Fallback (no WebGL or not yet enabled)
  if (!enabled) {
    return (
      <div
        ref={ref}
        className="absolute inset-0 bg-transparent"
      />
    );
  }

  return (
    <SplineErrorBoundary
      fallback={<div className="absolute inset-0 bg-transparent" />}
    >
      <div
        ref={ref}
        className="absolute inset-0 pointer-events-none select-none"
      >
        <Spline
          scene="https://prod.spline.design/3GKDyYbxNqGBQSIE/scene.splinecode"
          style={{
            background: "transparent",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </SplineErrorBoundary>
  );
}
